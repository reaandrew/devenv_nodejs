# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = "devenv_base_0.8.box"
  config.vm.box_url = "https://s3-eu-west-1.amazonaws.com/vagrant-boxes.andrewrea.co.uk/devenv_base_0.8.box"
  config.ssh.insert_key = false
  config.ssh.forward_agent = true

  config.vm.provision "ansible" do |ansible|
     ansible.playbook = "ansible/playbook.yml"
  end

  config.vm.provider 'virtualbox' do |vb|
    vb.name = "devenv_nodejs"
    vb.gui = false
  
    # Customize the amount of memory on the VM:
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "off"]
  end

end
