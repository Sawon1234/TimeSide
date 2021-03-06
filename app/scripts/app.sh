#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
source "$SCRIPT_DIR/app_base.sh"

# django init
python $manage wait-for-db
python $manage syncdb --noinput
python $manage migrate --noinput
python $manage bower_install -- --allow-root
python $manage collectstatic --noinput

if [ ! -f .init ]; then
    chown -R www-data:www-data $media
    python $manage timeside-create-admin-user
    python $manage timeside-create-boilerplate
    touch .init
fi

if [ $DEBUG = "False" ]; then
    python $manage update_index --workers $processes &
fi

# app start
if [ $1 = "--runserver" ]
then
    python $manage runserver_plus 0.0.0.0:8000
else
    # static files auto update
    watchmedo shell-command --patterns="*.js;*.css" --recursive \
        --command='python '$manage' collectstatic --noinput' $src &

    uwsgi --socket :$port --wsgi-file $wsgi --chdir $app --master \
        --processes $processes --threads $threads \
        --uid $uid --gid $gid \
        --py-autoreload $autoreload
fi
