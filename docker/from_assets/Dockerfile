FROM nginx:1.13.3-alpine

LABEL mainteiner="Patricio Perpetua <patricio.perpetua.arg@gmail.com>" \
    name="ravimosharksas/frontends/office" \
    architecture="x86_64" \
    vendor="SINGLETON SD" \
    vcs-type="git" \
    vcs-url="https://gitlab.com/ravimosharksas/frontends/office.git" \
    distribution-scope="private" \
    Summary="Image to run ravimoshark office frontend app."

ARG ASSET_FOLDER=

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY conf/nginx/nginx.config /etc/nginx/conf.d/default.conf

## From 'assets' copy over the artifacts in dist folder to default nginx public folder
COPY ./dist/${ASSET_FOLDER} /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
