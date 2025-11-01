# TIC2301 Project

# Contributing Members:
Emonda Wong
<br/>
Cheng Wei Xian
<br/>
Chan Zi Yee


# How the project works

This project showcases a man in the middle attack using the help of a html server and the wireshark tool. In a real world setting, the attack may be way more complex than this. This project serves to provide a simple, dumb-down version of the attack.

# Getting Started

This repository contains the TIC2301 Project, ensure that:
<br/>

- wireshark has been installed
- nodejs and npm has been installed
- qpdf has been installed

To install the following services:

```
sudo apt update
sudo apt install qpdf nodejs npm wireshark
```

## Starting the project:

1. To start server:
   Open up a terminal and run,

```
$ cd ${folder}
$ node server2.js
```

2. To start wireshark:
   Open up a terminal and run,
```
$ sudo wireshark
$ key in your password
```

   You will be prompted to start a session, select loopback to be able to test locally.

3. To encrypt/decrypt a file:
   Open up a terminal and run,
```
// Encryption
qpdf --encrypt Password123 Password123 256 -- ${fileToBeEncrypted} ${fileToEncryptTo}

// Decryption
qpdf --password=Password123 --decrypt ${fileToBeDecrypted} ${fileToDecryptTo}
```

  There's a password file and a normal pdf file for testing purposes in this repository
