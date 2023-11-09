This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Docker

The project has come with a Dockerfile for a quick deployment. Run the following command to make an image.

```bash
docker build -t finaljtth/secretrecipe-frontend:[tag] .
```

Once the image is built, rub the following command to push the docker image to the docker hub repository.

```bash
docker push finaljtth/secretrecipe-frontend:[tag]
```

Run the following command to deploy a container from the latest image on port 3000 on host machine.

```bash
docker run -it --rm --name secretrecipe-frontend -p 3000:3000 finaljtth/secretrecipe-frontend:latest
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!