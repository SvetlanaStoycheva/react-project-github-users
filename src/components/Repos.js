import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
import ChartComponent from './Charts/ExampleChart'
const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  // console.log(repos)
  let languages = repos.reduce((total, current) => {
    const { language, stargazers_count } = current
    if (!language) {
      return total
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    // console.log(total)
    return total
  }, {})

  const mostUsedLanguages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  //most stars per language
  let mostPopularLanguages = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map((item) => {
      let obj = { ...item, value: item.stars }
      delete obj.stars
      return obj
    })
    .slice(0, 5)
  // console.log(mostPopularLanguages)

  //stars, forks
  let { stars, forks } = repos.reduce(
    (total, current) => {
      const { stargazers_count, name, forks } = current
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      total.forks[forks] = { label: name, value: forks }
      return total
    },
    { stars: {}, forks: {} }
  )
  // console.log(stars)
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  // const chartData = [
  //   {
  //     label: 'HTML',
  //     value: '12',
  //   },
  //   {
  //     label: 'CSS',
  //     value: '26',
  //   },
  //   {
  //     label: 'JavaScript',
  //     value: '40',
  //   },
  // ]

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsedLanguages} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopularLanguages} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
