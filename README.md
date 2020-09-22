# Portfolio for Mitsuru Masumoto

This website is a portfolio website made by Gatsby.

Website is [here](https://mitsuru-masumoto.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/b561a65a-418e-41c4-a8ec-61644ce4bd54/deploy-status)](https://app.netlify.com/sites/mitsuru-masumoto/deploys)

# How to add new work

1. Add new thumbnail image into `./src/assets/images/thumbs` and full image into `./src/assets/images/fulls`.

- Thumbs image should be 340 \* 217
- Full image should be within 740

2. Add new gallery object into `./src/components/Gallery/constants/defaultImages.js` like this below.

Specify image files.

```
import full05 from '../../../assets/images/fulls/05.jpg'
import thumb05 from '../../../assets/images/thumbs/05.jpg'
```

Create new object.

```
{
    id: '5',
    source: full05, // Same valuable name of full image you imported
    thumbnail: thumb05, // Same valuable name of thumbnail image you imported
    title: '作品タイトル',
    date: '2020-01-01',
    description: '何か説明があればここに',
},
```
