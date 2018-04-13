all:
	docker build -t chrome-pdf .
	docker run -it --rm -p 8000:80 chrome-pdf