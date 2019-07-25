# Ravimoshark - Frontends - Office

> The **main repository** is hosted in [gitlab.com/ravimosharksas/frontends/office](https://gitlab.com/ravimosharksas/frontends/office.git) but it is automaticaly mirrored to [github.com](https://github.com/singletonsd/ravimosharksas-frontends-office.git) and to [gitlab.com/singletonsd/ravimosharksas/frontends/office](https://gitlab.com/singletonsd/ravimosharksas/frontends/office.git). If you are in the Github page it may occur that is not updated to the last version.

## Overview

This project contains an angular app to run Ravimoshark Office application.

## BRANCHING MODEL

* Default branch when pull is DEVELOP.
* Master branch is protected and it is not possible to push. Create a merge request instead.

## DEPLOYMENT

* **MASTER BRANCH:**
  * It creates a docker image with nginx with tags:
    * ravimosharksas/frontends/office:latest.
    * ravimosharksas/frontends/office:testing.
    * ravimosharksas/frontends/office:qa.
  * It copies built files on server amazon S3 bucket under the following url:
    * Singleton Server
      * [Singleton Server - URL Production](https://ravimo.singletonsd.com/frontends/office/production).
      * [Singleton Server - URL Testing](https://ravimo.singletonsd.com/frontends/office/testing).
      * [Singleton Server - URL QA](https://ravimo.singletonsd.com/frontends/office/qa).

* **DEVELOP BRANCH:**
  * It creates a docker image with nginx with tags:
    * ravimosharksas/frontends/office:staging.
    * ravimosharksas/frontends/office:develop.
    * ravimosharksas/frontends/office:testing-dev.
    * ravimosharksas/frontends/office:qa-dev.
  * It copies the files on server in:
    * Singleton Server
      * [Singleton Server - URL Staging](https://ravimo.singletonsd.com/frontends/office/staging).
      * [Singleton Server - URL Development](https://ravimo.singletonsd.com/frontends/office/development).
      * [Singleton Server - URL Testing Development](https://ravimo.singletonsd.com/frontends/office/testing-dev).
      * [Singleton Server - URL QA Development](https://ravimo.singletonsd.com/frontends/office/qa-dev).

## ENVIRONMENT STAGES

* **PRODUCTION:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/production](https://ravimo.singletonsd.com/frontends/office/production)
  * API calls to:
  * Attached to *master* branch.
* **STAGING:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/staging](https://ravimo.singletonsd.com/frontends/office/staging)
  * API calls to:
  * Attached to *develop* branch
* **DEVELOPMENT:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/](https://ravimo.singletonsd.com/frontends/office/development)
  * API calls to:
  * Attached to *develop* branch.
* **TESTING:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/testing](https://ravimo.singletonsd.com/frontends/office/testing)
  * API calls to:
  * Attached to *master* branch.
* **TESTING-DEV:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/testing-dev](https://ravimo.singletonsd.com/frontends/office/testing-dev)
  * API calls to:
  * Attached to *develop* branch.
* **QA:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/qa](https://ravimo.singletonsd.com/frontends/office/qa)
  * API calls to:
  * Attached to *master* branch.
* **QA-DEV:**
  * URL: [https://ravimo.singletonsd.com/frontends/office/qa-dev](https://ravimo.singletonsd.com/frontends/office/qa-dev)
  * API calls to:
  * Attached to *develop* branch.

## DOCKER IMAGES

The image name is: **ravimosharksas/frontends/office**. [See Registry](https://gitlab.com/ravimosharksas/frontends/office/container_registry). Available TAGs:

* From *master* branch:
  * **latest**
  * **testing**
  * **qa**
* From *develop* branch:
  * **staging**
  * **development**
  * **testing-dev**
  * **qa-dev**

----------------------

© [Singleton](http://singletonsd.com), Italy, 2019.
