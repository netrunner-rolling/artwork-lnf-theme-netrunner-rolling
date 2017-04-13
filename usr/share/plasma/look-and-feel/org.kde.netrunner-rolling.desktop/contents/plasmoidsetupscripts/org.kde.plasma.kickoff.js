applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
applet.writeConfig("favorites", ["org.gnome.Software.desktop", "octopi.desktop", "org.kde.ksysguard.desktop", "systemsettings.desktop"])
applet.writeConfig("alphaSort", true)
applet.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop,libreoffice-draw.desktop,libreoffice-base.desktop,libreoffice-math.desktop,lximage-qt-screenshot.desktop,audacious-qt.desktop,mpv.desktop")

applet.reloadConfig();
