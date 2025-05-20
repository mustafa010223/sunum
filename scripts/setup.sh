#!/bin/bash

echo "=== Başlangıç Ayarları Yapılıyor ==="
sudo apt update && sudo apt upgrade -y

echo "=== Temel Paketler Kuruluyor ==="
sudo apt install -y vim curl wget git htop net-tools unzip ufw fail2ban openssh-server build-essential software-properties-common

echo "=== SSH Yapılandırması ==="
sudo systemctl enable ssh
sudo systemctl start ssh

echo "=== Güvenlik Duvarı (UFW) Ayarlanıyor ==="
sudo ufw allow OpenSSH
sudo ufw --force enable

echo "=== Fail2Ban Etkinleştiriliyor ==="
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "=== Temel Kurulum Tamamlandı ==="
