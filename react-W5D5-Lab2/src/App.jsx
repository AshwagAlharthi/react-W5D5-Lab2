import './App.css'
import Benefit from './components/Benefit'
import Feature from './components/Feature'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-evenly items-center w-full h-[80vh]'>
        <p className='text-4xl w-[40vw] text-center'>Here are some of the benefits of your offer</p>
        <p className='w-[50vw] text-center'>Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.</p>
        <div className='flex justify-evenly items-center w-full flex-wrap max-sm:flex-col'>
          <Benefit image="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
            title="Benefit 1"
            desc="For example, restaurants and bakeries could outline the health benefits of their all- natural ingredients." />
          <Benefit image="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
            title="Benefit 2"
            desc="Florists and other small retailers. might use this space to describe how their products make delightful, one-of-a-kind gifts." />
          <Benefit image="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
            title="Benefit 3"
            desc="You could also add buttons to this section and share links to other products or available delivery methods." />
        </div>
      </div>
      <div className='relative w-full h-[60vh] flex flex-col justify-evenly items-center'>
        <img className='w-full h-[100%]'
          src='https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2' />
        <div className='absolute top-0 left-0 w-full h-[100%] flex flex-col justify-evenly items-center text-white text-center py-5'>
          <h3 className='text-xl'>What our customers say</h3>
          <h1 className='text-6xl font-bold text-[#ffb400]'>،،</h1>
          <p className='w-[40vw] text-2xl'>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</p>
          <div className='w-full h-[100%] flex flex-col justify-center items-center text-white text-center'>
            <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png' />
            <p>REAL NAME</p>
            <p>Location </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-slate-200'>
        <div className='w-[80vw] h-[60vh] flex justify-evenly items-center flex-wrap'>
          <Feature
            image="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F5f62f496-1e54-4012-8d8f-2f1000fe5bc5%2FUntitled.png?table=block&id=fff185a2-dff1-810c-b130-ed4997ed8b92&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2"
            title="Feature 1"
            desc="Talk about some of the details of your offer with a focus on the value people get back."
          />
          <Feature
            image="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F63d3a2f3-3120-4ed7-b1aa-aa020cb5e16c%2FUntitled.png?table=block&id=fff185a2-dff1-8164-8d80-ed3cf65ef67b&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2"
            title="Feature 2"
            desc="Is there a pain point that your product service resolves? Tell visitors about it here."
          />
          <Feature
            image="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F230c653c-0450-4fd1-8883-e96d6030db35%2FUntitled.png?table=block&id=fff185a2-dff1-81f0-8f6b-fb0cb12bb8b5&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2"
            title="Feature 3"
            desc="Alternatively, you could use this section to address some frequently asked questions."
          />
        </div>
      </div>
      <div className='flex justify-evenly items-center w-[90vw] h-[60vh]'>
        <img className='h-[30vh] w-[30vw]' src='https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F2f5489f8-f25a-4888-ad7f-e40ea4a7281d%2FUntitled.png?table=block&id=fff185a2-dff1-81a1-ba66-dde092088d99&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=860&userId=&cache=v2' />
        <div className='flex flex-col justify-start items-start'>
          <p>Some more information about your business</p>
          <p>Share a little about yourself as a business owner, or maybe
            describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you.</p>
        </div>
      </div>
    </>
  )
}

export default App
