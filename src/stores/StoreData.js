import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useDataStore = defineStore('data', () => {
  const allNews = ref([])
  const openForm = ref(0)
  const language = ref('en')
  const sliderNews = ref([])
  const scrollStatus = ref(false)

  const getIndexNews = async (page,category, sort_by, search)=>{
    const {data} = (await axios.get(`api/frontend/news`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    }))
    if (page === 1){
      sliderNews.value = data.data
    }
    allNews.value.push(...data.data)
    data.data[0] === undefined ? scrollStatus.value = false : scrollStatus.value = true
  }
  onMounted(async ()=>{await getIndexNews(1)})

  const textDataAbout = ref({
    item1: {
      en:{
        title : 'الخيرات العراقية',
        content: 'Our company started work in Iraq in 2009, during the construction of the Anwal Al-Khair project in Al-\n' +
            'Anbar Governorate - Heet\n' +
            'An integrated strategic project - which is the first scientific experiment in the field of Livestock that is\n' +
            'considered a quantum leap in the engineering and development of such projects Iraq.\n' +
            'The first building block of engineering to modern designs in poultry farming houses as it was based on\n' +
            'scientific developments that demonstrated in practice to be successful .\n' +
            'We embarked on a great march during which we tried to establish a culture of engineering based on\n' +
            'scientific development in agricultural and animal projects, relying entirely on Modern Science and the\n' +
            'use of Modern Equipment and Machines in the field Agriculture and Livestock keeping',
        text: ''
      },
      ar:{
        title : 'الخيرات العراقية',
        content: 'شرعت شركتنا بالعمل الفعلي والميداني في العراق عام 2009 من\n' +
            'خلال أنشاء مشروع انولا الخير في محافظة الأنبار _ قضاء هيت وهو\n' +
            'مشروع استراتيجي متكامل _ وهو التجربة العلمية الأولى في مجال\n' +
            'الثروة الحيوانية ويعتبر انتقاله نوعية في هندسة مشاريع ووضع\n' +
            'اللبنة الأولى للهندسة والتصاميم الحديثة في بيوت تربية الدواجن\n' +
            'حيث استند الى القواعد العلمية المثبتة عمليا بنجاحها .\n' +
            'من هنا كانت الانطلاقة في مسيرة كبيرة حاولنا من خلالها زرع ثقافة\n' +
            'علمية في هندسية المشاريع الزراعية والحيوانية والاعتماد كليا على\n' +
            'العلوم الحديثة واستخدام المعدات والآلات المستحدثة قي مجال',
        text: ''
      },
    },
    item2: {
      en:{
        title : 'Dr. Muhammad Abbas Ahmed Al-Obaidi.',
        content: 'Project Engineering, PhD, from the State of Russia.\n' +
            'Master\'s degree from the state of Azerbaijan.\n' +
            'Dr. Al-Obaidi is a renowned specialist in his field in Iraq and the Middle East and consults to the Iraqi Ministry of Agriculture and the Ministry of Planning.\n' +
            'Dr. Mohamed is a Member of the Iraqi Importers Union and the Chamber of Commerce.\n' +
            'His career is full of scientific work, that has been applied worldwide in many projects in various countries. Dr. Obaidi’s work achieved self-sufficiency in the country Azerbaijan. He is the author of a study for self-sufficiency and food security for the Republic of Iraq.\n' +
            'Dr. Al-Obaidi is the owner of Al-Warka projects in Al-Muthanna governorate, that comprise of Five investment projects, which are specialized in agricultural\n' +
            'and animal  production.',
        text: 'المدير العام'
      },
      ar:{
        title : 'الدكتور محمد عباس أحمد العبيدي',
        content: 'حاصل على دكتوراه في هندسة المشاريع من دولة روسيا، ودرجة الماجستير من دولة أذربيجان.\n' +
            'يُعد الدكتور العبيدي أحد أبرز المتخصصين في مجاله في العراق والشرق الأوسط، ويعمل كمستشار لوزارة الزراعة ووزارة التخطيط العراقية. كما أنه عضو في اتحاد المستوردين العراقيين وغرفة التجارة.\n' +
            'تمتد مسيرته المهنية عبر العديد من المشاريع العلمية التي طُبقت عالميًا في عدة دول، وقد ساهم عمله في تحقيق الاكتفاء الذاتي في دولة أذربيجان. وهو مؤلف دراسة حول الاكتفاء الذاتي والأمن الغذائي لجمهورية العراق.\n' +
            'الدكتور العبيدي هو مالك مشاريع الوركاء في محافظة المثنى، والتي تشمل خمسة مشاريع استثمارية متخصصة في الإنتاج الزراعي والحيواني.\n' ,
        text: 'Managing Director'
      },
    },
  })


  return { getIndexNews,sliderNews, allNews, textDataAbout, scrollStatus, openForm, language }
})