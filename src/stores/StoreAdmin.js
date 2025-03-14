import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useAdminStore = defineStore('admin', () => {
  const slidOpen = ref(true)
  const dashStep = ref(1)
  const openForm = ref(0)
  const notifications = ref()
  const alert = ref({
    id: "",
    open: false,
    title: "",
    description: "",
    number: 0
  })
  const allNews = ref([])
  const allComplaints = ref([])
  const newsData = ref({
    title : "",
    content : "",
    sendNoifyForGuest : false,
    image: null,
  })
  const complaintsData = ref({
    name : "",
    mobile : "",
    subject : "",
    description: "",
  })
  const notificationsData = ref({
    type: "",
    message: "",
    compliment: {
      name: "",
      mobile: "",
      subject: "",
      description: "",
      created_at: "",
    }
  })
  const scrollStatusNews = ref(false)
  const scrollStatusComplaints = ref(false)


  const getIndexNews = async (page,category, sort_by, search)=>{
    const {data} = await axios.get(`api/news`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    })
    allNews.value.push(...data.data)
    data.data[0] === undefined ? scrollStatusNews.value = false : scrollStatusNews.value = true

  }
  onMounted(async ()=>{await getIndexNews(1)})

  const getIndexComplaints = async (page,category, sort_by, search)=>{
    const {data} = await axios.get(`api/admin/complaints`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    })
    allComplaints.value.push(...data.data)
    data.data[0] === undefined ? scrollStatusComplaints.value = false : scrollStatusComplaints.value = true

  }
  onMounted(async ()=>{await getIndexComplaints(1)})

  const getIndexNotifications = async ()=>{
    const {data} = await axios.get(`api/notifications`)
    notifications.value = data
  }
  onMounted(async ()=>{await getIndexNotifications()})

  const getShowNews = async ()=>{
    const {data} = await axios.get(`api/news`)
    newsData.value = data.data
  }

  const formPostNews = async () =>{
    const {data} = await axios.post(`api/news`, newsData.value)
    return data
  }

  const formPutNews = async (id) =>{
    const {data} = await axios.put(`api/news/${id}`, newsData.value)
    return data
  }

  const formDeleteNews = async (id) =>{
    const {data} = await axios.delete(`api/news/${id}`)
    return data
  }

  return { notificationsData,notifications,complaintsData, getIndexNews, allNews, newsData, formPostNews ,getShowNews, formPutNews, formDeleteNews, alert, dashStep, openForm, slidOpen, allComplaints, getIndexComplaints, scrollStatusNews, scrollStatusComplaints }
})
