# TIC2301 Project

# Contributing Members:
**Emonda Wong**
<br/>
**Cheng Wei Xian**
<br/>
**Chan Zi Yee**

# About this Project

This project demonstrates how network security improves through different levels of protection, analysed using Wireshark. It starts with a simple web login system that sends credentials in plaintext, then adds server-side hashing (Argon2), and finally implements HTTPS/TLS encryption. Each stage is captured and examined in Wireshark to visualise how data visibility changes — from fully readable packets to fully encrypted traffic. The project highlights the importance of encryption in preventing eavesdropping and securing sensitive information during transmission.

# Getting Started

This repository contains the TIC2301 Project, ensure that:
<br/>

- Wireshark has been installed
- NodeJS and npm have been installed

To install the following services:

```
npm init -y
npm i express body-parser argon2 argon2-browser
```
Wireshark download: https://www.wireshark.org/download.html

## Starting the project:

1. To start the server, depending on which tiers to test:
   Open up a terminal and run,

```
$ cd ${folder}
$ node serverBase.js
```
or 
```
$ cd ${folder}
$ node serverWithHash.js
```

2. To start Wireshark:
   Run the application, and select loopback to be able to test locally.



