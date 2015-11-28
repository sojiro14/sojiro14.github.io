---
layout: post
title: "update screen for vertical dividing"
date: 2015-05-22 13:59:26 +0900
comments: true
categories: 
---

$ screen -v
Screen version 4.00.03 (FAU) 23-Oct-06

$ brew install autoconf
Warning: autoconf-2.69 already installed


$ brew install automake
Error: automake-1.14.1 already installed
To install this version, first `brew unlink automake'


$ git clone git://git.savannah.gnu.org/screen.git
Cloning into 'screen'...
remote: Counting objects: 4844, done.
remote: Compressing objects: 100% (1068/1068), done.
remote: Total 4844 (delta 3763), reused 4833 (delta 3758)
Receiving objects: 100% (4844/4844), 2.67 MiB | 627.00 KiB/s, done.
Resolving deltas: 100% (3763/3763), done.
Checking connectivity... done.



$ cd screen/src


$ autoconf

$ autoheader
autoheader: WARNING: Using auxiliary files such as `acconfig.h', `config.h.bot'
autoheader: WARNING: and `config.h.top', to define templates for `config.h.in'
autoheader: WARNING: is deprecated and discouraged.
autoheader: 
autoheader: WARNING: Using the third argument of `AC_DEFINE' and
autoheader: WARNING: `AC_DEFINE_UNQUOTED' allows one to define a template without
autoheader: WARNING: `acconfig.h':
autoheader: 
autoheader: WARNING:   AC_DEFINE([NEED_FUNC_MAIN], 1,
autoheader:     [Define if a function `main' is needed.])
autoheader: 
autoheader: WARNING: More sophisticated templates can also be produced, see the
autoheader: WARNING: documentation.


```bash
$ ./configure
this is screen version 4.2.1
checking for prefix by checking for screen... /usr/bin/screen
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking how to run the C preprocessor... gcc -E
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking whether gcc needs -traditional... no
checking for library containing strerror... none required
checking for ANSI C header files... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking minix/config.h usability... no
checking minix/config.h presence... no
checking for minix/config.h... no
checking whether it is safe to define __EXTENSIONS__... yes
checking for gawk... no
checking for mawk... no
checking for nawk... no
checking for awk... awk
checking for a BSD-compatible install... /usr/bin/install -c
configure: checking for buggy tools...
- sh  is 'GNU bash, version 3.2.53(1)-release (x86_64-apple-darwin13)'.
checking if a system-wide socket dir should be used... yes
checking for the socket dir... (eff_uid ? "/tmp/uscreens" : "/tmp/screens")
configure: checking for MIPS...
configure: checking for Ultrix...
configure: checking for butterfly...
configure: checking for POSIX.1...
- you have a POSIX system
configure: checking for System V...
configure: checking for sequent/ptx...
configure: checking SVR4...
checking stropts.h usability... no
checking stropts.h presence... no
checking for stropts.h... no
checking for string.h... (cached) yes
checking for strings.h... (cached) yes
configure: checking for Solaris 2.x...
configure: checking BSD job jontrol...
- you have jobcontrol
configure: checking setresuid...
configure: checking setreuid...
configure: checking seteuid...
configure: checking execvpe...
configure: checking select...
configure: checking fifos...
- your fifos are usable
configure: checking for broken fifo implementation...
- your implementation is ok
configure: checking sockets...
- your sockets are usable
configure: checking socket implementation...
- you are normal
- both sockets and fifos usable. let's take sockets.
configure: checking select return value...
- select is ok
configure: checking for tgetent...
configure: checking libcurses...
- you use the terminfo database
configure: checking ospeed...
configure: checking for /dev/ptc...
configure: checking for SVR4 ptys...
checking for getpt... no
configure: checking for ptyranges...
configure: checking default tty permissions/group...
checking for write... /usr/bin/write
checking for xterm... no
- pty mode: 0620, group: 4
configure: checking getutent...
configure: checking getutent with -lgen...
configure: checking ut_host...
checking utempter.h usability... no
checking utempter.h presence... no
checking for utempter.h... no
configure: checking for libutil(s)...
configure: checking getloadavg...
assuming posix signal definition
configure: checking for crypt and sec libraries...
configure: checking crypt...
configure: checking IRIX sun library...
configure: checking syslog...
configure: checking wait union...
configure: checking for termio or termios...
configure: checking getspnam...
configure: checking getttyent...
configure: checking fdwalk...
configure: checking whether memcpy/memmove/bcopy handles overlapping arguments...
checking for long file names... yes
checking for vsprintf... yes
checking for dirent.h that defines DIR... yes
checking for library containing opendir... none required
checking for setenv... checking for nl_langinfo(CODESET)... yes
checking for library containing gethostname... none required
checking for rename... yes
checking for fchmod... yes
checking for fchown... yes
checking for strerror... yes
checking for lstat... yes
checking for _exit... yes
checking for utimes... yes
checking for vsnprintf... yes
checking for getcwd... yes
checking for setlocale... yes
checking for strftime... yes
checking for the global screenrc file... configure: creating ./config.status
config.status: creating Makefile
config.status: creating doc/Makefile
config.status: creating config.h
config.status: executing default commands

Now please check the pathnames in the Makefile and in the user
configuration section in config.h.
Then type 'make' to make screen. Good luck.
```

```bash
$ make
CPP="gcc -E -DETCSCREENRC='"/usr/etc/screenrc"' -DSCREENENCODINGS='"/usr/share/screen/utf8encodings"'" srcdir=. sh ./osdef.sh
AWK=awk CC="gcc -g -O2" srcdir=. sh ./comm.sh
AWK=awk srcdir=. sh ./term.sh
gcc -c -I. -I.  -DETCSCREENRC='"/usr/etc/screenrc"' -DSCREENENCODINGS='"/usr/share/screen/utf8encodings"' -DHAVE_CONFIG_H -DGIT_REV=\""`git describe --always 2>/dev/null`"\" \
       -g -O2 screen.c
In file included from screen.c:89:
In file included from ./screen.h:150:
./display.h:168:10: warning: 'utmp' is deprecated [-Wdeprecated-declarations]
  struct utmp d_utmp_logintty;  /* here the original utmp structure is stored */
         ^
/usr/include/utmp.h:92:8: note: 'utmp' has been explicitly marked deprecated here
struct utmp {
```


```bash
$ sudo make install
Password:
./etc/mkinstalldirs /usr/bin /usr/share/screen/utf8encodings
cd doc ; /Applications/Xcode.app/Contents/Developer/usr/bin/make installdirs
./../etc/mkinstalldirs /usr/share/man/man1 /usr/share/info
if [ -f /usr/bin/screen-4.2.1 ] && [ ! -f /usr/bin/screen-4.2.1.old ]; \
    then mv /usr/bin/screen-4.2.1 /usr/bin/screen-4.2.1.old; fi
/usr/bin/install -c screen /usr/bin/screen-4.2.1
chown root /usr/bin/screen-4.2.1 && chmod 4755 /usr/bin/screen-4.2.1
if [ -f /usr/bin/screen ] && [ ! -f /usr/bin/screen.old ]; then mv /usr/bin/screen /usr/bin/screen.old; fi
rm -f /usr/bin/screen
(cd /usr/bin && ln -f -s screen-4.2.1 screen)
cp ./utf8encodings/?? /usr/share/screen/utf8encodings
cd doc ; /Applications/Xcode.app/Contents/Developer/usr/bin/make install
./../etc/mkinstalldirs /usr/share/man/man1 /usr/share/info
/usr/bin/install -c -m 644 ./screen.1 /usr/share/man/man1/screen.1
/Applications/Xcode.app/Contents/Developer/usr/bin/make screen.info
makeinfo ./screen.texinfo -o screen.info
if test -f screen.info; then d=.; else d=.; fi; \
  if test -f $d/screen.info; then \
  for f in $d/screen.info*; do /usr/bin/install -c -m 644 $f /usr/share/info;done; \
  if /bin/sh -c 'install-info --version' >/dev/null 2>&1; then \
    install-info --info-dir=/usr/share/info $d/screen.info; \
  else true; fi; \
  fi
if [ -d /usr/lib/terminfo ]; then \
    PATH="$PATH:/usr/5bin" tic ./terminfo/screeninfo.src; \
    chmod 644 /usr/lib/terminfo/s/screen*; \
  fi
termcap entry (./terminfo/screencap) should be installed manually.
You may also want to install ./etc/etcscreenrc in /usr/etc/screenrc
```



```bash
$ screen -v
Screen version 4.02.01 (GNU52e9cd9) 28-Apr-14
```



```bash
$ screen.old -v
Screen version 4.00.03 (FAU) 23-Oct-06
```



## 参照
* [MacのTerminalのScreenを縦分割可能にする](http://katz-lifehack.hatenablog.com/entry/2013/05/24/004431)

