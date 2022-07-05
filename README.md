# Bangkit Capstone Project C22-PS328

Web application intended for partner to register, login, and view dashboard to see data visualization, add/remove/edit voucher, and see purchasing logs.Tech stack used:

- Nextjs
- Typescript
- Tailwind CSS
- Chartjs

## Deployment

Currently, the webapp is deployed on GCP using Cloud Run
https://ecotrans-webapp-h3lwczj22a-et.a.run.app

It's also deployed on Heroku :
https://nextjs-capstone.herokuapp.com
<br/>
Use username: demo and pass: Demo123 to test the admin dasboard

## Development

```bash
    npm run dev
```

Check on localhost port 3000

## Build

```bash
    npm run build
    npm run start
```

## Cloud Run Deployment

To deploy app to Cloud Run, build docker container

```bash
    npm run build docker build -t gcr.io/bangkit-352613/ecotrans-web:v1.02
```

Then, push into container registry (need service account with sufficient permission)

```bash
    docker push gcr.io/bangkit-352613/ecotrans-web:v1.02
```

Then, deploy to cloud run with selected image

```bash
    gcloud run deploy ecotrans-webapp --image=gcr.io/bangkit-352613/ecotrans-web:v1.02
```

## Docs

![appgif](https://github.com/davidf1000/nextjs-bangkit-capstone/blob/main/docs/ecotrans.gif)
<br/>
![Landing Page](https://user-images.githubusercontent.com/47879766/173211591-01b74779-0b9b-4418-ada1-180a4622344c.png)
<br/>
![Landing Page](https://user-images.githubusercontent.com/47879766/173211596-205610fa-4b1b-4251-bfe0-832ac4b84d3d.png)
<br/>
![login](https://user-images.githubusercontent.com/47879766/173211599-207438b9-c295-4441-ab03-6968677848ae.png)
<br/>
![register](https://user-images.githubusercontent.com/47879766/173211601-8bc047f4-f31f-4259-b23c-942918165ede.png)
<br/>
![dashboard-voucher](https://user-images.githubusercontent.com/47879766/173211602-a6011692-842e-4fa2-b7be-160a74af35aa.png)
<br/>
![dashboard-logs](https://user-images.githubusercontent.com/47879766/173211604-a0bc7799-412c-4865-b082-b19836edde28.png)
<br/>
![dashboard-summary](https://user-images.githubusercontent.com/47879766/173211605-8aa6f625-4653-401b-9526-02e6dee9dc98.png)

## Some lofi Mockups using AdobeXD

### Landing Page

![Landing Page -](https://user-images.githubusercontent.com/47879766/169674120-d6494fdf-943b-47b4-8f98-b5fa949a45df.png)

### Login

![Login -login](https://user-images.githubusercontent.com/47879766/169674127-1a8667d2-5e1c-4bc0-aec3-f3d115c2fc9b.png)

### Register

![register -register step 1](https://user-images.githubusercontent.com/47879766/169674129-999f8467-fe44-454a-9db6-af3a67cd9c99.png)

### Dashboard

![Dashboard -dashboard](https://user-images.githubusercontent.com/47879766/169674131-716b450a-d9c0-453b-8ac5-0c9e63446724.png)

### Voucher

![My Voucher -voucher](https://user-images.githubusercontent.com/47879766/169674132-ffb6eaff-52a6-465d-a522-e9167791a3c1.png)

### Purchase Log

![Purchase Logs -logs – 1](https://user-images.githubusercontent.com/47879766/169674135-84246109-2fa1-4cd0-a291-f32b57a8c766.png)
