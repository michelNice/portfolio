const supabaseUrl = 'https://qtphhhtqstcphwcnewdc.supabase.co'
const supabaseKey = 'sb_publishable_diJO977_qHHwD6dvn1CflA_9JzkgsTx'
const supabaseClient = window.supabase.createClient(
   supabaseUrl,
   supabaseKey

);

export async function test(lang){

    const {data,error} = await supabaseClient
    .from('translations')
    .select('key,value').eq('lang', lang)
    
   const result = data.reduce((accumulator,obj)=> {
    accumulator[obj.key] = obj.value

    return accumulator
   }, {});

   console.log(result)
   console.log('Error',error)

   return result
}


