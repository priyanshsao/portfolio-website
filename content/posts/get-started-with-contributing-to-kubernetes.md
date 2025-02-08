---
title: "Get Started with Contributing to Kubernetes"
date: 2024-05-19
description: "If you are new to open source and eager to begin contributing to the Kubernetes website, this blog will guide you through the process step by step, starting from the basics until you make your first pull request."
weight: 1
is_single: True
---

If you are new to open source and eager to begin contributing to the Kubernetes website, this blog will guide you through the process step by step, starting from the basics until you make your first pull request.

**Note:** These steps are for users with a **Windows operating system**.

### Downloading and Installing Git
This process involves a fundamental step. You can refer to instructional videos on platforms like YouTube by searching for **"how to install Git."** Following these tutorials will enable you to proceed with the necessary tasks effectively.

### Sign up with GitHub
Before proceeding to work on an issue, you first need to create an account on GitHub.

1. Go to [GitHub](https://github.com/)
2. Create an account

### Connecting Git and GitHub using SSH

- #### Generating an SSH key
  1. Open Git Bash.
  2. Run the following command, replacing `your_email@example.com` with your GitHub email:
      
     ```sh
     ssh-keygen -t ed25519 -C "your_email@example.com"
     ```

   3. Press **Enter** when prompted:
   - `Enter file in which to save the key (/root/.ssh/id_ed25519):` → Press **Enter**
   - `Enter passphrase (empty for no passphrase):` → Press **Enter**
   - `Enter same passphrase again:` → Press **Enter**

   4. Copy the generated SSH key to your clipboard:
      
      ```sh
      clip < ~/.ssh/id_ed25519.pub
      ```

---

- #### Adding SSH Key to GitHub
  1. Go to **GitHub** → **Settings** → **SSH and GPG keys**
  2. Click **New SSH Key**
  3. Enter a name and paste the copied SSH key
  4. Click **Create** 

---

- #### Connecting Git to GitHub
  In Git Bash, run:

  ```sh
  ssh -T git@github.com
  ```

  If prompted with `Are you sure you want to continue connecting?`, type `yes` and proceed.
  You should receive a confirmation message stating that you have been successfully authenticated.

---

### Finding Good First Issues
   1. Go to [Kubernetes Website Repository](https://github.com/kubernetes/website)
   2. Navigate to the **Issues** section
   3. Click on the **Label** dropdown
   4. Type **"good first issue"**
   5. You'll see a list of beginner-friendly issues

### Cloning the Repository
   1. Open **Git Bash** in the folder where you want to clone the repository (**Shift + Right-click** → **Open Git Bash Here**).
   2. Run the following command, replacing `SSH Key` with the repository SSH URL:

      ```sh
      git clone SSH-Key
      ```

### Assets Required to Build the Website
   Install the following tools locally:

   - **npm**
   - **Go**
   - **Hugo (Extended Version)** (Make sure it matches the `HUGO_VERSION` specified in `netlify.toml`)
   - **Docker**

### Setting up the Website Locally
   1. Open **Git Bash** and run:
      
      ```sh
      cd website
      ```
   
   2. Fetch submodule dependencies:
      
      ```sh
      git submodule update --init --recursive --depth 1
      ```

   3. Open **PowerShell** in the same `website` folder and run:
      
      ```sh
      npm ci
      hugo.exe server --buildFuture --environment development
      ```

   4. Open your browser and visit: **[http://localhost:1313](http://localhost:1313)** to view the website.

   As you make changes, Hugo updates the site and refreshes your browser automatically.

**Note:** After executing the above code, you do not need to run it again to launch the website locally. Simply navigate to the `website` folder, open **PowerShell**, and enter:

```sh
hugo server
```

This command will initiate the server.

### Contribution Process Summary
   1. **Find an issue**
   2. **Clone the repository**
   3. **Create a new branch**
   4. **Make the desired changes**
   5. **Build the website using Hugo and verify the fixes**
   6. **Push changes to the origin**
   7. **Create a pull request**

That's it! 🎉 You are now ready to contribute! 🚀
