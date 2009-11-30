# -*- coding: utf-8 -*-
#
# Copyright (c) 2009 Olivier Guilyardi <olivier@samalyse.com>
#
# This file is part of TimeSide.

# TimeSide is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 2 of the License, or
# (at your option) any later version.

# TimeSide is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with TimeSide.  If not, see <http://www.gnu.org/licenses/>.


# This file defines a generic object interface mechanism and 
# a way to determine which components implements a given interface.
#
# For example, the following defines the Music class as implementing the
# listenable interface.
#
# class Listenable(Interface):
#     pass
#
# class Music(Component):
#    implements(Listenable)
#
# Several class can implements a such interface, and it is possible to 
# discover which class implements it with implementations():
#
# list_of_classes = implementations(Listenable)
#
# This mechanism support inheritance of interfaces: a class implementing a given 
# interface is also considered to implement all the ascendants of this interface.
#
# However, inheritance is not supported for components. The descendants of a class 
# implementing a given interface are not automatically considered to implement this 
# interface too. 

__all__ = ['Component', 'MetaComponent', 'implements', 'Interface', 'implementations']

class Interface(object):
    """Marker base class for interfaces."""

def implements(*interfaces):
    """Registers the interfaces implemented by a component when placed in the
    class header"""
    _implements.extend(interfaces)

def implementations(interface, recurse=True):
    """Returns the components implementing interface, and if recurse, any of 
    the descendants of interface."""
    result = []
    find_implementations(interface, recurse, result)
    return result

_implementations = []
_implements = []

class MetaComponent(type):
    """Metaclass of the Component class, used mainly to register the interface
    declared to be implemented by a component."""
    def __new__(cls, name, bases, d):
        new_class = type.__new__(cls, name, bases, d)
        if _implements:
            for i in _implements:
                _implementations.append((i, new_class))
        del _implements[:]
        return new_class

class Component(object):
    """Base class of all components"""
    __metaclass__ = MetaComponent

def extend_unique(list1, list2):
    """Extend list1 with list2 as list.extend(), but doesn't append duplicates
    to list1"""
    for item in list2:
        if item not in list1:
            list1.append(item)

def find_implementations(interface, recurse, result):
    """Find implementations of an interface or of one of its descendants and
    extend result with the classes found."""
    for i, cls in _implementations:
        if (i == interface):
            extend_unique(result, [cls])

    if recurse:
        subinterfaces = interface.__subclasses__()
        if subinterfaces:
            for i in subinterfaces:
                find_implementations(i, recurse, result)
