import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtphhhtqstcphwcnewdc.supabase.co'
const supabaseKey = 'sb_publishable_diJO977_qHHwD6dvn1CflA_9JzkgsTx'

const supabaseClient = createClient(supabaseUrl, supabaseKey)

export async function test(lang) {

  const { data, error } = await supabaseClient
    .from('translations')
    .select('key, value')
    .eq('lang', lang)

  if (error) {
    throw error
  }

  const result = data.reduce((acc, obj) => {
    acc[obj.key] = obj.value
    return acc
  }, {})

  return result
}
