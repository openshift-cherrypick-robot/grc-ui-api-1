###############################################################################
# Licensed Materials - Property of IBM Copyright IBM Corporation 2017, 2019. All Rights Reserved.
# U.S. Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP
# Schedule Contract with IBM Corp.
#
# Contributors:
#  IBM Corporation - initial API and implementation
###############################################################################

include Configfile

SHELL := /bin/bash

ifneq ($(ARCH), x86_64)
DOCKER_FILE = Dockerfile.$(ARCH)
else
DOCKER_FILE = Dockerfile
endif
@echo "using DOCKER_FILE: $(DOCKER_FILE)"

.PHONY: init\:
init::
-include $(shell curl -fso .build-harness -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github.v3.raw" "https://raw.github.ibm.com/ICP-DevOps/build-harness/master/templates/Makefile.build-harness"; echo .build-harness)

.PHONY: copyright-check
copyright-check:
	./copyright-check.sh

lint:
	npm run lint

prune:
	npm prune --production

.PHONY: build
build:
	npm run build:production

local:: build prune

.PHONY: test
test:
ifeq ($(UNIT_TESTS), TRUE)
	if [ ! -d "test-output" ]; then \
		mkdir test-output; \
	fi
	npm test
	# @$(SELF) log:test LOG_TEST_OUTPUT_DIR=test-output
endif

#Check default DOCKER_REGISTRY/DOCKER_BUILD_TAG/SCRATCH_TAG/DOCKER_TAG values in Configfile
#Only new value other than default need to be set here
.PHONY: docker-logins
docker-logins:
	make docker:login DOCKER_REGISTRY=$(DOCKER_EDGE_REGISTRY)
	make docker:login DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)
	make docker:login

.PHONY: image
image:: docker-logins
	make docker:info
	make docker:build
	docker image ls -a

.PHONY: run
run: 
	make docker:run

.PHONY: push
push:
	make docker:login DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)
	make docker:tag-arch DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY) DOCKER_TAG=$(SCRATCH_TAG)
	make docker:push-arch DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY) DOCKER_TAG=$(SCRATCH_TAG)

.PHONY: release
release:
	make docker:login
	make docker:tag-arch
	make docker:push-arch
ifeq ($(ARCH), x86_64)
	make docker:tag-arch DOCKER_TAG=$(RELEASE_TAG_RED_HAT)
	make docker:push-arch DOCKER_TAG=$(RELEASE_TAG_RED_HAT)
endif
