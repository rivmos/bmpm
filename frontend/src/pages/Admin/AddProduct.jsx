import React, { useEffect, useState } from 'react'
import productServices from '../../services/productServices'
import EnquirySuccess from '../../components/EnquiryAdded'

const AddProduct = () => {
    const [form, setForm] = useState({
        productName: '',
        mainCategory: '',
        subCategory: '',
        brochureLink: '',
        videoLink: '',
        specifications: {
            ProductionRate: '',
            ElectricalSupply: '',
            Power: '',
            Consumption: '',
            Dimension: '',
            Weight: '',
        },
        features: [],
    })
    const [featureInput, setFeatureInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const [mainCategories, setMainCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])


    const handleSpecificationChange = (specName, value) => {
        setForm(prevForm => ({
            ...prevForm,
            specifications: {
                ...prevForm.specifications,
                [specName]: value,
            },
        }));
    };

    const handleAddFeature = (e) => {
        e.preventDefault()
        setForm(prevForm => ({
            ...prevForm,
            features: prevForm.features.concat(featureInput)
        }))
        setFeatureInput('')
    }

    const handleRemoveFeature = (index) => {
        setForm(prevForm => ({
            ...prevForm,
            features: prevForm.features.filter((item, filterIndex) => filterIndex !== index)
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        productServices.addNewProduct(form).then(() => {
            setIsOpen(true)
        })
    }

    

    useEffect(() => {
        productServices.getMainCategories().then(data => setMainCategories(data))
        productServices.getSubCategories().then(data => setSubCategories(data))
    }, [])

    return (
        <form className='max-w-8xl mx-auto py-4'>
            <EnquirySuccess isOpen={isOpen} setIsOpen={setIsOpen} message="Product Saved Successfully"/>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-primaryBrown">Add Product</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Enter Information Of The Product
                    </p>
                    {/* Basic Info */}
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div className='sm:col-span-3'>
                            <label htmlFor="mainCategory" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="productName"
                                    id="productName"
                                    autoComplete="given-name"
                                    value={form.productName}
                                    onChange={(e) => { setForm({ ...form, productName: e.target.value }) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="mainCategory" className="block text-sm font-medium leading-6 text-gray-900">
                                Select Main Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="mainCategory"
                                    name="mainCategory"
                                    autoComplete="mainCategory-name"
                                    value={form.mainCategory}
                                    onChange={(e) => { setForm({ ...form, mainCategory: e.target.value }) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    {
                                        mainCategories?.map((mc, index) => <option key={index}>{mc}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="subCategory" className="block text-sm font-medium leading-6 text-gray-900">
                                Select Sub Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="subCategory"
                                    name="subCategory"
                                    autoComplete="subCategory-name"
                                    value={form.subCategory}
                                    onChange={(e) => { setForm({ ...form, subCategory: e.target.value }) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    {
                                        subCategories?.map((sc, index) => <option key={index}>{sc}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-primaryBrown">Links</h2>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="brochureLink" className="block text-sm font-medium leading-6 text-gray-900">
                                Brochure Link
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="brochureLink"
                                    id="brochureLink"
                                    autoComplete="given-name"
                                    value={form.brochureLink}
                                    onChange={(e) => { setForm({ ...form, brochureLink: e.target.value }) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="brochureLink" className="block text-sm font-medium leading-6 text-gray-900">
                                Video Link
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="brochureLink"
                                    id="brochureLink"
                                    autoComplete="given-name"
                                    value={form.videoLink}
                                    onChange={(e) => { setForm({ ...form, videoLink: e.target.value }) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-primaryBrown">Specifications</h2>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="productionRate" className="block text-sm font-medium leading-6 text-gray-900">
                                Production Rate
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="productionRate"
                                    id="productionRate"
                                    autoComplete="given-name"
                                    value={form.specifications.ProductionRate}
                                    onChange={e => handleSpecificationChange('ProductionRate', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="electricalSupply" className="block text-sm font-medium leading-6 text-gray-900">
                                Electrical Supply
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="electricalSupply"
                                    id="electricalSupply"
                                    autoComplete="given-name"
                                    value={form.specifications.ElectricalSupply}
                                    onChange={e => handleSpecificationChange('ElectricalSupply', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="power" className="block text-sm font-medium leading-6 text-gray-900">
                                Power
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="power"
                                    id="power"
                                    autoComplete="given-name"
                                    value={form.specifications.Power}
                                    onChange={e => handleSpecificationChange('Power', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="consumption" className="block text-sm font-medium leading-6 text-gray-900">
                                Consumption
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="consumption"
                                    id="consumption"
                                    autoComplete="given-name"
                                    value={form.specifications.Consumption}
                                    onChange={e => handleSpecificationChange('Consumption', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="dimension" className="block text-sm font-medium leading-6 text-gray-900">
                                Dimension
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="dimension"
                                    id="dimension"
                                    autoComplete="given-name"
                                    value={form.specifications.Dimension}
                                    onChange={e => handleSpecificationChange('Dimension', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Weight
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    autoComplete="given-name"
                                    value={form.specifications.Weight}
                                    onChange={e => handleSpecificationChange('Weight', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-primaryBrown">Features</h2>
                    <ul>
                        {
                            form.features.map((feature, index) => {
                                return (
                                    <div key={feature} className='flex gap-2'>
                                        <li>{feature}</li>
                                        <span onClick={() => handleRemoveFeature(index)}><i class="fa-solid fa-trash text-sm cursor-pointer text-gray-400"></i></span>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8">
                        <div className="sm:col-span-3">
                            <label htmlFor="features" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter A Feature And Press Add Feature
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="features"
                                    id="features"
                                    autoComplete="given-name"
                                    value={featureInput}
                                    onChange={(e) => { setFeatureInput(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                    className="rounded-md mt-2 bg-primaryBrown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lightBrown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleAddFeature}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-primaryBrown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lightBrown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default AddProduct