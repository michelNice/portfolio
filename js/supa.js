const supabaseUrl = 'https://qtphhhtqstcphwcnewdc.supabase.co'
const supabaseKey = 'sb_publishable_diJO977_qHHwD6dvn1CflA_9JzkgsTx'
const supabaseClient = window.supabase.createClient(
   supabaseUrl,
   supabaseKey

);

async  function test(){

    const {data,error} = await supabaseClient
    .from('translations')
    .select("*")
    .limit(1)


    console.log(data)

    console.log(error)
}

test()