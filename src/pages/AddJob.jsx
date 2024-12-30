import { useEffect, useRef, useState } from "react"
import Quill from "quill"
import { assets, JobCategories, JobLocations } from "../assets/assets"

const AddJob = () => {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("Bangalore")
  const [category, setCategory] = useState("Programming")
  const [level, setLevel] = useState("Beginner level")
  const [salary, setSalary] = useState(0)
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  useEffect(() => {
    // initiate quill only once
    if (!quillRef.current && editorRef.current)
      quillRef.current = new Quill(editorRef.current, { theme: "snow" })
  }, [])
  return (
    <form className="container p-4 flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>
      <div className="w-full max-w-lg">
        <p className="my-3">Job Description</p>
        <div ref={editorRef}></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8 mb-2 mt-4">
        {/* start Job Category */}
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={JobCategories}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* start Job Location */}
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={JobLocations}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* start Job level */}
        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level ">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>
      <div>
        <p className="mb-2">Job Salary</p>
        <input
          min={0}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          placeholder="2500"
        />
      </div>
      <button className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  )
}

export default AddJob
