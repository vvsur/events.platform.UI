import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/ru/events/all-cities/all-times'
      })
      res.end()
    } else {
      Router.push('/ru/events/all-cities/all-times')
    }
    return {}
  }
}