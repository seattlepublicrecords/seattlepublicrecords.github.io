---
title: Seattle Public Records provides free public scanner site far superior to that
  of KOMO's or Broadcastify
date: '2016-09-14 10:54:00'
thumbnail: ''
categories:
- news
tags:
- netural
description: ''
author: Seattle Public Records
layout: post
---
Using the laptop of the late attorney [Cleveland Stockmeyer](http://www.thestranger.com/slog/2016/05/03/24037709/seattle-mourns-the-loss-of-cleveland-stockmeyer-one-of-its-greatest-attorneys) who won [SeaCop a few public records settlements](http://www.thestranger.com/blogs/slog/2015/10/12/23000564/seattle-police-department-reaches-30000-settlement-with-center-for-open-policing-over-disclosure-of-gps-data) Seattle Public Records is providing the public free access to live and historicial public safety radio transmissions. See [scanner.seattlepublicrecords.org](https://scanner.seattlepublicrecords.org/) While we've had the site up for about a month we went in last night and removed a lot of irrelevant talkgroups, labeled them, and prioritized SPD dispatchers, West radio, and West PTAC. 

As this tool is improved we could get to the point where records requesters no longer need to ask for radio audio because they could obtain it themselves. We are reaching out to SPD to discuss the possibility of quickly obtaining the data we need to know for tying transmissions to a given incident.

Neither KOMO's or Broadcastify's sites give the public the ability to playback indivual transmissions, the wide range of talkgroups, or the ability to pick which talkgroups or radios to listen to. Note Broadcastify is what the phone apps use. On Android one is able to listen via SPR Scanner in realtime with the screen off. 

This system was inexpensive to setup. We use:

- This tutorial: [http://www.rtl-sdr.com/rtl-sdr-tutorial-following-trunked-radio-unitrunker/](http://www.rtl-sdr.com/rtl-sdr-tutorial-following-trunked-radio-unitrunker/) Note a hard part is figuring out the PPM Correction for each radio. We used a NOAA weather channel. See https://www.youtube.com/watch?v=gFXMbr1dgng
- Two $20 TV tunners [https://www.amazon.com/NooElec-RTL-SDR-RTL2832U-Software-Packages/dp/B008S7AVTC](https://www.amazon.com/NooElec-RTL-SDR-RTL2832U-Software-Packages/dp/B008S7AVTC) One listens to the control channel. Another switches frequencies and listens to audio based on a configuration.
- Windows
- Unitrunker [http://www.unitrunker.com/download/](http://www.unitrunker.com/download/)
- Trunking Recorder [http://www.scannerbox.us/TrunkingRecorder/](http://www.scannerbox.us/TrunkingRecorder/)
- VB-Audio Virtual Cable [http://vb-audio.pagesperso-orange.fr/Cable/](http://vb-audio.pagesperso-orange.fr/Cable/)
- We learned about the talkgroups from [http://www.radioreference.com/apps/db/?sid=604](http://www.radioreference.com/apps/db/?sid=604)
- Our config file for Unitrunker is at [http://pastebin.com/1H9mdZi0](http://pastebin.com/1H9mdZi0)

Auto transcription didn't go as well as we hoped, see [https://twitter.com/spdsouthradio](https://twitter.com/spdsouthradio) We'll try transcription of just the dispatchers next. We'll probably need to do a hybird where computer does an attempt at transcription and a human fixes it.

Next steps are:
* Auto uploading the audio to Dropbox
* Building a new interface that incorporates auto transcripts, allows adding of manual transcriptions, per incident note taking, incorporates real-time fire data, Tweets, etc. One thing is needed is the ability to quickly select audio to turn into a clip that can be uploaded to Youtube.
* Adding more radios so we can capture multiple simulateous transmissions. We may have to purchase a virtual audio cable tool. The free one we use doesn't seem to allow us to have multiple virtual cables. 