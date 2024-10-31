import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Some information about me 
      </h1>
      <p className="mb-4">
        {`I'm a software engineer at Hewlett Packard Enterprise (HPE) where I am currently assisting on a Federal Account, assisting with the deployment of HPE's disconnected Hybrid Ops Console (a solution incorporating ServiceNow).`}
      </p>
      <p className='mb-4'>
        {`I was born and raised in Long Island, New York. In August 2023, I packed my bags and moved down south to peach-country to work at an HPE office in Alpharetta, Georgia.`}
      </p>
      <p className='mb-4'>
        {`My alma mater is SUNY Stony Brook University, where I studied Computer Science and graduated in Summer 2023.`}
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
