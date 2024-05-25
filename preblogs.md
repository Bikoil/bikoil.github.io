# Why I think Unix systems are the best for development

***

Before you say "oh but i use [software] and it runs well on windows and it's great for development" I don't mean for every type of development, but most, Unix systems or Unix-like systems (such as linux, MacOS, and FreeBSD, even Android!) all share one thing in common, and that's the terminal.

***

# The Terminal
The terminal is a place where a user enters commands to make the system do an action, works like a file explorer essentially, but it's actually much more than just that, navigation in the system is efficient and faster than what you expect.

But the terminal isn't just a file explorer, it's the core of the system! other than the kernel of course, The terminal manages everything happening, if an operation exists, it probably can be done via terminal, Well this isn't all! You can download software from the terminal!

# What? How? 
There are essentially 3 ways to download software or overall files from the terminal

_**First Way:**_ **Download links**
Unix systems most likely come pre-installed with something like `wget` or `curl`, On some systems, you gotta install it through the Package Manager, More on that later on, all you need to download a file is a Download link from the internet, then simply `wget <download link>` and then boom! you have the file!

You may think "What's the point when you need a GUI browser to see the download link from the first place?" Who said you needed a gui browser? there are browsers in your terminal! such as w3m, which can be installed via the Package Manager

_**Second way: **_ **Package Manager**
The most popular way of getting software is through the package manager, Although windows has one, which is `winget`, it is very limiting, Most linux systems have a package manager, and the most popular ones are apt (used by debian) pacman (used by arch) and portage (used by gentoo), The one with the biggest amount of packages availability to download (Repository) is pacman due to how big the AUR (Arch User Repository) is, You can get development software from the Package manager, such as an IDE (Integrated Development Environment AKA Text Editor) like VSCode or Neovim, or some editing software like Blender or GIMP, It's great and easy to install, usually on Windows you need to get an EXE installer (if the software isnt in the MSS, which is most of the time) and then install the package, in most Unix systems, you just need one command! like `sudo apt install <software>` or `sudo pacman -S <software>` it depends on the package manager.

With that said, Not all Unix systems have an exact package manager, for example, Android usually doesn't have a native package manager, usually you have to get an apk and use ADB to install the apk file `adb install <path to apk file>` but thanks to Termux, you have new pseudo package managers to get software from! 

Some systems don't have a package manager installed by default, like MacOS or FreeBSD, usually, you need to get a third party package manager known as Homebrew, and for FreeBSD, it's pretty simple to get its package manager, just do `pkg` and it prompts you to install pkg to the system.

_**Third way:**_ **Git**
If the software you are looking for isn't available in your package manager for example, or if you want to build the software from source, then git is the answer! git is probably THE best development platform ever, with many web based platforms such as github and gitlab, it's a great version control tool! you can install git from the package manager as it is a widely universal package in every system, most of the time, you need to clone the Repository of the software, then run 2 or 3 commands as instructed in the Repository, then you have the software!

Git is not only for hosting code, it is also the greatest development platform ever made.

***

Now the terminal is great, but why don't we dig deeper into the structure of unix systems?

# Structure of Unix Systems
The best thing about unix is that they all share a very similar structure, you will see a pattern between them, Unix systems consist of 2 types of users, a normal user that can do actions that don't require root (administrative) perms, but still can access root via `sudo`, then the root user, this user has absolute control of the system, and can pretty much do anything, the Root user is like administrator in windows, but with more control over the system.

# File System Structure 
All unix systems have a / (AKA Root directory, not to be confused with /root) directory which is the very back of the system, kinda like the C:\ directory in windows, most unix systems have 2 similar directories, one is known as /bin which contains all the essential commands for the system, then /usr/bin, where most user commands are done, and then you have /sbin, which contains  all superuser (root) commands.

If you don't understand yet, directories (such as /bin) are folders, and / is the backbone folder that is at the very start of the system.

Then you have /home/<username>, This is your home directory where all user specific things are located, there is also /root (again, not to be confused with /) it's like the previous directory, but for root user.

# How is this related to development?
Well, if it wasn't obvious enough, Most unix systems put YOU in control, making it the perfect development environment to not only test in it but also create in it, you can change absolutely anything in the system to your liking, so you can do whatever you want! heck even destroy the system, and you can use linux to test if your software is secure or not.


# Conclusion
As a final conclusion, unix systems are great for development, and it has a strong dev environment with a nice terminal and supportive community, if you'd like to try unix systems, I recommend trying [linux mint](https://linuxmint.com/) which is debian based or [EndeavourOS](https://endeavouros.com/) which is arch based.


*Writer: bikoil*
