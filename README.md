[![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb&style=for-the-badge)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Discord](https://img.shields.io/discord/1187474009911206008?color=7289da&label=Discord&logo=discord&style=for-the-badge)](https://discord.gg/vhs87h6fvD)

# Heracles WebUI

> The companion web interface for the Heracles WoW addon

## 🌐 Introduction

**Heracles WebUI** is designed to support the [Heracles](https://gitlab.com/devsoleo/heracles) World of Warcraft addon by simplifying the creation of event keys — unique sequences of missions used to organize multiplayer events in-game.

These keys are essential to the functioning of the addon and are generated directly through this UI.

The WebUI is fully integrated with our backend project [Heracles API](https://gitlab.com/devsoleo/heracles-api).

## 🚀 Features

- Clean and fast interface powered by **React** and **Vite**
- Communicates with the Heracles API backend to access real in-game data
- Supports all mission types used by the Heracles addon
- Built to streamline the generation process for event organizers
- Dockerized for easy deployment

## 🐳 Docker

```bash
docker pull registry.gitlab.com/devsoleo/heracles-webui:latest
```

