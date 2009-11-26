#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import timeside
import magic
from timeside.core import Component, ExtensionPoint, ComponentManager


class TestAnalyzers(Component):
    analyzers = ExtensionPoint(timeside.analyze.IAnalyzer)

    def list(self):
        analyzers = []
        for analyzer in self.analyzers:
            analyzers.append({'name':analyzer.name(),
                            'id':analyzer.id(),
                            'unit':analyzer.unit(),
                            })
        print analyzers

    def run(self, media):
        print '\n=== Analyzer testing ===\n'
        for analyzer in self.analyzers:
            id = analyzer.id()
            value = analyzer.render(media)
            print id + ' = ' + str(value) + ' ' + analyzer.unit()


class TestDecoders(Component):
    decoders = ExtensionPoint(timeside.decode.IDecoder)

    def list(self):
        decoders_list = []
        for decoder in self.decoders:
            decoders_list.append({'format': decoder.format(),
                            'mime_type': decoder.mime_type(),
                            'file_extension': decoder.file_extension(),
                            })
        print decoders_list

    def get_decoder(self, mime_type):
        for decoder in self.decoders:
            if decoder.mime_type() == mime_type:
                return decoder

    def export(self, media_dir):
        files = os.listdir(media_dir)
        m = magic.Magic(mime=True)
        for file in files:
            media = media_dir + os.sep + file
            magic_file = m.from_file(media)
            mime = magic_file.lower()
            print mime
            file_ext = file.split('.')[-1]
            decoder = self.get_decoder(mime)
            if decoder:
                stream = decoder.process(media)
                #print decoder.command
                file_path = 'results/sweep' + '_' + file_ext + '.wav'
                f = open(file_path, 'w')
                for chunk in stream:
                    f.write(chunk)
                    f.flush()
                f.close()

class TestEncoders(Component):
    encoders = ExtensionPoint(timeside.encode.IEncoder)

    def list(self):
        encoders = []
        for encoder in self.encoders:
            encoders.append({'format': encoder.format(),
                            'mime_type': encoder.mime_type(),
                            })
        print encoders

    def get_encoder(self, mime_type):
        for encoder in self.encoders:
            if encoder.mime_type() == mime_type:
                return encoder

    def run(self, source, metadata):
        print '\n=== Encoder testing ===\n'
        for encoder in self.encoders:
            m = magic.Magic(mime=True)
            magic_file = m.from_file(source)
            mime = magic_file.lower()
            format = encoder.format()
            decoders = TestDecoders(comp_mgr)
            decoder = decoders.get_decoder(mime)
            decoded = decoder.process(source)
            ext = encoder.file_extension()
            stream = encoder.process(decoded, metadata)
            file_path = 'results/sweep' + '.' + ext
            file = open(file_path, 'w')
            for chunk in stream:
                file.write(chunk)
            print 'Sound exported to :' + file_path
            file.close()


class TestGraphers(Component):
    graphers = ExtensionPoint(timeside.graph.IGrapher)

    def list(self):
        graphers = []
        for grapher in self.graphers:
            graphers.append({'id':grapher.id(),
                            'name':grapher.name(),
                            })
        print graphers

    def run(self, media):
        print '\n=== Grapher testing ===\n'
        for grapher in self.graphers:
            id = grapher.id()
            image = grapher.render(media)
            file_path = 'results/'+id+'.png'
            file = open(file_path, 'w')
            for chunk in image:
                file.write(chunk)
            print 'Image exported to :' + file_path
            file.close()



if __name__ == '__main__':
    sample = 'samples/sweep_source.wav'
    metadata = (('creator', 'yomguy'), ('date', '2009'), ('name', 'test'))
    comp_mgr = ComponentManager()
    a = TestAnalyzers(comp_mgr)
    d = TestDecoders(comp_mgr)
    e = TestEncoders(comp_mgr)
    g = TestGraphers(comp_mgr)
    a.list()
    d.list()
    e.list()
    g.list()
    a.run(sample)
    g.run(sample)
    e.run(sample, metadata)
    d.export('samples/')

