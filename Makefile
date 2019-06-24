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

.PHONY: docker-logins
docker-logins:
	make docker:login DOCKER_REGISTRY=$(DOCKER_EDGE_REGISTRY)
	make docker:login DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)
	make docker:login DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY)

.PHONY: image
image:: docker-logins
	make docker:info DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY)
	make docker:build DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY)
	docker image ls -a

.PHONY: run
run: 
	make docker:run

.PHONY: push
push:
	make docker:login DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)
	make docker:tag-arch DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)
	make docker:push-arch DOCKER_REGISTRY=$(DOCKER_SCRATCH_REGISTRY)

.PHONY: release
release:
	make docker:login DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY)
	make docker:tag-arch DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY) DOCKER_BUILD_TAG=$(RELEASE_TAG)
	make docker:push-arch DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY) DOCKER_TAG=$(RELEASE_TAG)
ifeq ($(ARCH), x86_64)
	make docker:tag-arch DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY) DOCKER_BUILD_TAG=$(RELEASE_TAG_x86_64)
	make docker:push-arch DOCKER_REGISTRY=$(DOCKER_INTEGRATION_REGISTRY) DOCKER_TAG=$(RELEASE_TAG_x86_64)
endif
