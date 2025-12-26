export const formatRp = (nilai:number)=>{
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(nilai).slice(0,-3);
}