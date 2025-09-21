import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 45%;
  z-index: 2024;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
`

const button = styled.div`
  color: #fff;
  background-color: #0070cc;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0050b3;
  }

  &:active {
    background-color: #003080;
  }
`

const scrollToElement = (element: Element) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

const getReplyInformation = (replyElement: Element) => {
  const contentsElement = replyElement.shadowRoot
    .querySelector("bili-comment-renderer")
    .shadowRoot.querySelector("#body > #main")

  console.log(contentsElement)

  const data = {
    // 用户名
    username: contentsElement
      .querySelector("bili-comment-user-info")
      .shadowRoot.querySelector("#user-name")
      .textContent.trim()
  }

  return data
}

const getallcomments = () => {
  const biliCommentsHost = document.querySelector(
    ".bili-comment-container bili-comments"
  )

  const contentsElement = biliCommentsHost.shadowRoot.querySelector("#contents")

  scrollToElement(contentsElement)

  const replyElements = contentsElement.querySelectorAll(
    "bili-comment-thread-renderer"
  )

  replyElements.forEach((element, index) => {
    console.log(getReplyInformation(element))

    if (element) {
      const rect = element.getBoundingClientRect()

      if (
        rect.top < 0 || // 元素在视窗上方
        rect.bottom >
          (window.innerHeight || document.documentElement.clientHeight) // 元素在视窗下方
      ) {
        // 如果不在屏幕内，滚动到该元素
        scrollToElement(element)
      }
    }
  })
}

const Index = () => {
  return (
    <Container>
      <button onClick={getallcomments}>
        <span>获取全部评论</span>
      </button>
    </Container>
  )
}

export default Index
