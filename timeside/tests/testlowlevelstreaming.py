
from timeside.core import *
from timeside.decoder import *
from timeside.analyzer import *
from timeside.encoder import *
from timeside.api import *

from timeside.component import *
from timeside.tests import TestCase, TestRunner
import unittest

import os.path

__all__ = ['TestComponentArchitecture']

class TestLowLevel(TestCase):
    "Test the low level streaming features"

    def setUp(self):
        pass
   
    def testWav2Mp3(self):
        "Test wav to mp3 conversion"
        self.source = os.path.join (os.path.dirname(__file__),  "samples/sweep.wav")

        dest1 = "/tmp/test_wav_filesink.mp3"
        dest2 = "/tmp/test_wav_appsink.mp3"
        self.f = open(dest2,'w')

        self.streaming=True

        encoder = Mp3Encoder(dest1, streaming=True)
        self.encoder = encoder

    def testFlac2Mp3(self):
        "Test flac to mp3 conversion"
        self.source = os.path.join (os.path.dirname(__file__),  "samples/sweep.flac")

        dest1 = "/tmp/test_flac_filesink.mp3"
        dest2 = "/tmp/test_flac_appsink.mp3"
        self.f = open(dest2,'w')

        self.streaming=True

        encoder = Mp3Encoder(dest1, streaming=True)
        self.encoder = encoder

    """
    def testFlac2Ogg(self):
        "Test flac to ogg conversion"
        self.source = os.path.join (os.path.dirname(__file__),  "samples/sweep.flac")

        dest1 = "/tmp/test_flac_filesink.ogg"
        dest2 = "/tmp/test_flac_appsink.ogg"
        self.f = open(dest2,'w')

        self.streaming=True

        encoder = VorbisEncoder(dest1, streaming=True)
        self.encoder = encoder

    def testWav2Ogg(self):
        "Test wav to ogg conversion"
        self.source = os.path.join (os.path.dirname(__file__),  "samples/sweep.wav")

        dest1 = "/tmp/test_wav_filesink.ogg"
        dest2 = "/tmp/test_wav_appsink.ogg"
        self.f = open(dest2,'w')

        self.streaming=True

        encoder = VorbisEncoder(dest1, streaming=True)
        self.encoder = encoder
    """

    def testWav2Flac(self):
        "Test wav to flac conversion"
        return False
        self.source = os.path.join (os.path.dirname(__file__),  "samples/sweep.wav")

        dest1 = "/tmp/test_wav_filesink.flac"
        dest2 = "/tmp/test_wav_appsink.flac"
        self.f = open(dest2,'w')

        self.streaming=True

        encoder = FlacEncoder(dest1, streaming=True)
        self.encoder = encoder

    def setUpDecoder(self):
        self.decoder = FileDecoder(self.source)
        self.decoder.setup()
        self.channels  = self.decoder.channels()
        self.samplerate = self.decoder.samplerate()

    def setUpEncoder(self): 
        self.encoder.setup(channels = self.channels, samplerate = self.samplerate)

    def tearDown(self):
        self.setUpDecoder()
        self.setUpEncoder()
        encoder = self.encoder
        f = self.f

        #print "decoder pipe:\n", decoder.pipe
        #print "encoder pipe:\n", encoder.pipe

        while True:
            frames, eod = self.decoder.process()
            print frames.shape
            encoder.process(frames, eod)
            if self.streaming:
                f.write(encoder.chunk)
            if eod:
                break
            if encoder.eod :
                break
        f.close()

if __name__ == '__main__':
    unittest.main(testRunner=TestRunner())

