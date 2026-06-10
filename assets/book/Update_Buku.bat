@echo off
echo Memperbarui daftar buku perpustakaan...
echo window.BOOK_FILES = [ > list.js
for %%f in (*.pdf) do echo   "%%f", >> list.js
echo ]; >> list.js
echo.
echo Berhasil! Daftar buku (list.js) telah diperbarui dengan file PDF terbaru.
timeout /t 3
