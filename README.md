## Compfest Software Engineering Task

### Getting Started

Boilerplate ini menggunakan BlitzJS sebagai frameworknya. Akan tetapi, bagi teman-teman yang sudah berpengalaman dengan NextJS tidak perlu khawatir karena BlitzJS cara kerjanya sama dengan NextJS hanya saja terdapat fitur-fitur tambahan yang akan memudahkan proses development nantinya.

#### 1. Pastikan teman-teman sudah menginstall npm dan nodejs dengan versi 12 ke atas

#### 2. Install blitz cli

```
  npm install -g blitz --legacy-peer-deps
```

#### 3. Generate the Route Manifest

```
  blitz codegen
```

#### 4. Migrate Prisma Schema

```
  blitz p migrate dev
```

#### 5. Generate Prisma Client

```
  blitz p generate
```

#### 6. Run the development server

```
  blitz dev

  # or

  npm run dev

  # or

  yarn dev
```

Teman-teman kemudian bisa membuat page di folder app/core/pages atau membuat component di folder app/core/components.

## Figma Link

https://www.figma.com/file/sx8mV4JFUo1qh5aaHmCGWb/Tugas-Oprec-Staf-SE

## Data dari Database

Kita akan menggunakan prisma sebagai typeorm untuk bisa mengakses langsung data dari database. Teman-teman bisa langsung menggunakan hooks useMeme() yang sudah dibuatkan yang ada di app/core/hooks/useMeme.ts. Pada hooks tersebut juga sudah dibuatkan function untuk menyimpan meme dan menghapus meme yang sudah tersimpan. Silakan teman-teman pelajari cara kerjanya dengan membaca dokumentasi berikut:

- Blitzjs (https://blitzjs.com)
- useQuery (https://blitzjs.com/docs/use-query)
- useMutation (https://blitzjs.com/docs/use-mutation)
- Prisma (https://www.prisma.io/)

## Melihat Data dari Database

Teman-teman bisa melihat langsung data yang ada pada database dengan menjalankan perintah berikut:

```
  blitz p studio
```

## Styling

Boilerplate ini sudah terkonfigurasi dengan TailwindCSS (https://tailwindcss.com/). Jika teman-teman ingin menggunakan library atau framework css lain silakan tambahkan sendiri.

## Schema

Schema itu apa sih?
Schema itu intinya adalah lembaran yang isinya hal-hal yang bisa diakses user, programmer seperti teman-teman, calon Software Engineer COMPFEST!

Nah, dengan Schema ini, kamu bisa melakukan banyak hal, yang paling utama adalah Query dan Mutation.
Query adalah "mengambil" data dari schema yang diberikan, dan Mutation adalah melakukan "perubahan" terhadap kumpulan data yang ada.

## Data Model

Teman-teman bisa melihat data model di db/schema.prisma. Teman-teman cukup fokus kepada satu data model, yaitu Memes. Pada data model Memes terdapat 4 attribute, yaitu:

- id, bertipe integer sebagai key dari setiap data memes
- title, bertipe string, digunakan untuk memberikan informasi tentang memes (kamu bisa memanfaatkan attribute ini untuk fitur search)
- imageSrc, bertipe string dengan format URL, digunakan untuk menampilkan gambar
- saved, bertipe boolean dengan default value false, digunakan untuk menandakan apakah meme sudah disimpan atau belum

want to ask? contact us through line id: 0017849211
