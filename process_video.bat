
@echo off
ffmpeg -y -i "C:\Users\Екатерина\Videos\Записи экрана\Запись 2026-08-14 044310_1.mp4" -vf "crop=1200:900" -c:v libx264 -crf 23 -preset fast -an "c:\Users\Екатерина\.gemini\portfolio Ekaterina\public\art-aesthetics-loop.mp4"
