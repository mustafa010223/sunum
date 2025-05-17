provider "local" {}

resource "null_resource" "k3s_install" {
  provisioner "local-exec" {
    command = <<EOT
    curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644
    EOT
  }
}

resource "null_resource" "open_ports" {
  provisioner "local-exec" {
    command = <<EOT
    sudo ufw allow 80
    sudo ufw allow 443
    sudo ufw allow 6443
    EOT
  }
}
