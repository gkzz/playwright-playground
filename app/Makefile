.DEFAULT_GOAL := help
CONTAINER_NAME := node-app
#COMMIT_HASH := $(shell git rev-parse --short HEAD)
## -- Section Delimiter --
## Ref: Add a help target to a Makefile that will allow all targets to be self documenting
## https://gist.github.com/prwhite/8168133
## This help message
## Which can also be multiline

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## make build
	docker build -f Dockerfile -t gkzz/${CONTAINER_NAME}:v0 .

.PHONY: image
image: ## make image
	docker image ls | grep ${CONTAINER_NAME}

.PHONY: run
run: ## make run
	docker run -d --name ${CONTAINER_NAME} -p 8080:8080 gkzz/${CONTAINER_NAME}:v0

.PHONY: ps
ps: ## make ps
	docker ps -a | grep "${CONTAINER_NAME}" | head -n 1

.PHONY: rm
rm: ## make rm
	docker rm -f $$(docker ps -a | grep "${CONTAINER_NAME}" | head -n 1 | awk '{print $$1}')

.PHONY: rmall
rmall: ## make rmall
	docker ps -a | grep -E "${CONTAINER_NAME}" | awk '{print $$1}' | xargs docker rm -f

.PHONY: logs
logs: ## make logs
	docker logs ${CONTAINER_NAME}

.PHONY: exec
exec: ## make exec
	docker exec -it ${CONTAINER_NAME} /bin/bash