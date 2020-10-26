//global fetch

import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import withHelmet from '../utils/withHelmet'

async function getPost(id) {
  const response = await fetch.get(`http://localhost/api/v1/posts/${id}`)
  return response.json()
}

function usePostDate({ postId }) {
  const [post, setPost] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  async function reteiveData() {
    try {
      setLoading(true)
      const postResponse = await getPost(postId)
      setPost(postResponse)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return [{ post, isLoading, error }, { reteiveData }]
}

function Story() {
  const { storyId } = useParams()
  const [{ story, isLoading, error }, { reteiveData }] = usePostDate(storyId)

  useEffect(() => {
    reteiveData()
  }, [reteiveData])
  
  return <div>Story page {storyId}</div>
}

export default withHelmet('Blog App | Story')(Story)
