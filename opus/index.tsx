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

const getallcomments = () => {
  const opusDetailElements = document.querySelectorAll(
    ".opus-detail .bili-comment-container"
  )

  // 检查是否找到元素
  if (opusDetailElements.length === 0) {
    console.log("没有找到类名为 opus-detail 的元素")
    return
  }

  // 滚动到第一个找到的元素
  if (opusDetailElements[0]) {
    opusDetailElements[0].scrollIntoView({
      behavior: "smooth", // 平滑滚动
      block: "start" // 滚动到元素的顶部
    })
  }
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
