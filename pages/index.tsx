import Link from 'next/link'
import Layout from '../components/Layout'


//擬似的なリンク用仮データ
const persons = [
  { id: 1, name: "bafuko" },
  { id: 2, name: "hourei tenten" },
  { id: 3, name: "otome oto" },
  { id: 4, name: "kurousagi uru" }
];

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <Link href="/about">
        <a>About(next.js LinkAPI)</a>
      </Link>
    </div>

    <div>
      <a href="/about">About(a tag only)</a>
    </div>


    {
      persons.map(
        person => {
          return (
            <div key={person.id}>
              <Link as={`/${person.name}`} href="/[person]">
                <a>{person.name}</a>
              </Link>
            </div>
          );
        }
      )
    }

  </Layout>
)

export default IndexPage