#!/bin/sh

#change to home directory
cd ~

#update deb packages
sudo apt-get update

#upgrade outdated packages
sudo apt-get upgrade

#download XAMP through wget as download
wget http://sourceforge.net/projects/xampp/files/XAMPP%20Linux/1.8.3/xampp-linux-x64-1.8.3-2-installer.run/download

#Installer will be name download
mv download ~/Downloads/xampp-linux-x64-1.8.3-2-installer.run
cd ~/Downloads

#Give the installer permissions to run & install
chmod +x xampp-linux-x64-1.8.3-2-installer.run
sudo ./xampp-linux-x64-1.8.3-2-installer.run
