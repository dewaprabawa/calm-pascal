import { put } from '@vercel/blob';


(async () => {
  try {
    const { url } = await put('test.txt', 'Hello World!', {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN.replace(/"/g, '')
    });
    console.log('Public upload success:', url);
  } catch (err) {
    console.error('Public upload failed:', err.message);
  }

  try {
    const { url } = await put('test_private.txt', 'Hello World!', {
      access: 'private',
      token: process.env.BLOB_READ_WRITE_TOKEN.replace(/"/g, '')
    });
    console.log('Private upload success:', url);
  } catch (err) {
    console.error('Private upload failed:', err.message);
  }
})();
