all:
	docker build -t chrome-pdf .
	docker run -p -it --rm 8000:80 chrome-pdf