import React from 'react'

export default function Main() {
    return (
        <div className='container-main w-screen min-w-md mx-auto'>
            <nav className="banner ">
                <div className="flex flex-wrap items-center justify-between mx-auto xl:p-4 2xl:p-4 xl:mr-3 sm:mr-0 md:mr-3 md:p-3 sm:pl-3 sm:pr-3 pr-16 md:h-20 xl:h-24 sm:h-12">
                    <a href="#" className="flex items-start sm:w-1/2">
                        <img src="./logo.png" className="md:h-12 xl:h-16 sm:h-6 mr-1" alt="Flowbite Logo" />
                        <span className="self-center xl:text-2xl md:text-md sm:text-sm whitespace-nowrap text-white">Cortal Insight</span>
                    </a>
                    <div className="items-center justify-between w-full sm:w-auto md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 sm:p-1 md:p-0 mt-4 font-medium border border-gray-100 sm:flex-row md:flex-row md:space-x-8 md:mt-0 md:border-0 sm:mt-0 sm:border-0 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 md:hover:text-white sm:hover:text-white text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 nav-company" aria-current="page">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 md:hover:text-white sm:hover:text-white text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 nav-dash">Dashboard</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
            <div className="content w-full flex flex-col justify-center xl:mt-64 md:mt-52 sm:mt-36 pt-5 text-white">
                <div className="heading-title flex justify-center lg:text-4xl md:text-4xl sm:text-3xl"><p className='lg:w-4/12 md:w-8/12 sm:w-10/12'>Data scientists struggle to extract value from messy, complex visual data.</p></div>
                <div className="heading-content text-center sm:text-lg md:text-xl xl:text-2xl mt-20">Cortal Insight helps organizations unlock true value of data</div>
                <div className="input flex justify-center mt-14">
                    <button className='join_btn lg:w-64 hover:bg-orange-500 md:w-50 sm:w-44'>Join product waitlist&#8594;</button>
                </div>
            </div>
            <div className="artboard w-full">
                <img src='artboard.png' alt='artboard' className='w-full' />
            </div>
            <div className="data-section grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 text-white h-fit">
                <div className='data-item flex items-start justify-center p-20 pt-48'>
                    <div className=''>
                        <span className='data-title flex justify-center lg:text-4xl md:text-4xl sm:text-3xl mb-20'>1. Data quality</span>
                        <span className='data-description flex justify-center pr-10 pl-10 sm:pr-20 sm:pl-20 sm:text-lg md:text-xl lg:text-2xl'>Erroneous data can lead to inaccurate model training and analysis. Cortal Insight helps identify irregularities and eliminate irrelevant samples. </span>
                    </div>
                </div>
                <div className='data-item p-8 flex-col justify-center'>
                    <div className="vector-border flex-col items-start m-10 mb-0 w-10/12 h-fit  rounded-lg p-10 ">
                        <div className="bad-sample gradient-border rounded-md w-full mb-6">
                            <div className="gradient-content rounded-md w-full bg-black">
                                <div className="sample-header w-full text-xl p-3">Bad Samples</div>
                                <div className="sample-content w-full">
                                    <div className="bad-samples flex p-7 gap-4">
                                        <div className="flex-initial w-32 h-24">
                                            <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/3952/6849/df0e78542e5e8c9fb14ec064e8690b69?Expires=1701043200&Signature=SHFu1Fz-9RouMyzAVObbokV~qxPYSbIMzC0yXA2KPdZ-a7cmO4c8g1~9DkEaajMQTm0Te-ET2UDwEbu7JGzbRPBD15oJSrsRCTl3Qe~g3rT2s~xfMPSIV6YSFHBXJNuAANwiNPtksyboEL0KQ6c3qlHRfH3NOpyOYke1oD7ps-K5dpi1EEOnmGPcc2zuMlFZvS6I~fxwi13YbxVgGXUrca1bAsyskPBcNd1yf6BvxB7Q2pCvjJ6QAPWNM~OjEhVdav8zWnDDn2KrNOIWj6j4TksfLvSZtWHpUCY77T40f2BLqK-eJjithbs-6zSvSfVoRzv8kt1FAB6VBW4Wztf6Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />
                                            <h4 className='text-center'>Burry</h4>
                                        </div>
                                        <div className="flex-initial w-40 h-24">
                                            <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/0488/a85e/760c3580a465294b3d411807a46615a8?Expires=1701043200&Signature=mUnvs9xr1eQq~iUk45BT0jylb1j1Q1fbUxQ~6oNUlVATp6DpVO2IRsNbfIJkStOyZk1P~aFVFHn0ddNyifeLnIuSlk~JrsTDXXPlq2~K2lMOgkgTzkmE4nFRt5Qb8K0UJyAlNgj3KNbNEpwRnFFfDyyxVvgYu2leF3RJzTH8klzgdJs4oxG2JdE2nhM~lArz10B87fIrq9B~Di~Dk9GSriduoFM9OtSZQ~1z6MVDirsLrqGN8tb~y-SGrDEyJ8buWLOh~Gj-pEyU3qz2iwCNTqVOntrGU5C9p7wRtQhwfLFJ8kT0YlKjxnMCX9qw-0s6GE4D3zEx094l~8YhgzmFlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img2" />
                                            <h4 className='text-center'>Dark</h4>
                                        </div>
                                        <div className="flex-initial w-36 h-24">
                                            <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/4c65/9372/a2c3cf40e5e73750fcb6551a2153f0f7?Expires=1701043200&Signature=NYVFAYSvp0SuVgxbAIn1mJetG9Uw8In2omIHZ5HT1oqEuT3rrZSjodH2F6eQFLzo5O1psEOVpkDZi1M8VAj44XF-16E3v9D5MRNAtjO2iLy3YGUpJSpoKKd~LTBH8UHk~3TODZV5cpwfbQfILTFDDNiCguzJ89qV3tGWA1UzhDMPPA7S66Lb-KEKI7l4sYjf2~GUPsCYrucw7sbekKH~2VFBf4i--k2mBV7fwryCE2Obic6y45Kl6RNUK2odLh87DpClNJQoig-YAJ16JDwVfrW1ye3Gt5HIWGK1DzuRfye7DNMxC~ia4QbtCbeJfT1AuTkT~2SA6bDEo843I49Dqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img3" />
                                            <h4 className='text-center'>Light</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reducdant-sample gradient-border rounded-md w-full">
                            <div className="gradient-content rounded-md w-full bg-black">
                                <div className="sample-header w-full text-xl p-3">Redundant Samples</div>
                                <div className="sample-content w-full">
                                    <div className="bad-samples flex p-7 gap-4">
                                        <div className="group1 flex flex-col gap-4">
                                            <div className="wrap flex gap-2">
                                                <div className="flex-initial w-30 h-24">
                                                    <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/68b8/1016/cb9ca820bafeebba94c6377686ae71e5?Expires=1701043200&Signature=YJpey1mTmjLXe6xXfOPdxaUrKh4Z2J1enHTi5EZBI9Dw9uZ93vA5lmraZXSzdmnbuLy4gy-5z-ZtUBiEOQBaCpZnNqn3yTx8tAGpka01q52BavlKiTdJxxEiKg7JwE2kZMRzQx0P01YWJ65QbQ56EjNeZe65qFEGOQw8Xra9xno5CPy65z0aAsRJIz3eWN6MZwLhq0-JtzXSoXrbRP1GO7KEnVFgLM7PuT9fncA9WIEpMgOzCCI6snHGn3f2QtEzQtuhiARvx4LySZn7LQGLzcMBqvMiMocxA0Qm9hFKmEEzy2DtUNePhWTR-105J9Xmz2PMsKH4ef8BceKiNEPnjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />
                                                </div>
                                                <div className="flex-initial w-30 h-24">
                                                    <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/68b8/1016/cb9ca820bafeebba94c6377686ae71e5?Expires=1701043200&Signature=YJpey1mTmjLXe6xXfOPdxaUrKh4Z2J1enHTi5EZBI9Dw9uZ93vA5lmraZXSzdmnbuLy4gy-5z-ZtUBiEOQBaCpZnNqn3yTx8tAGpka01q52BavlKiTdJxxEiKg7JwE2kZMRzQx0P01YWJ65QbQ56EjNeZe65qFEGOQw8Xra9xno5CPy65z0aAsRJIz3eWN6MZwLhq0-JtzXSoXrbRP1GO7KEnVFgLM7PuT9fncA9WIEpMgOzCCI6snHGn3f2QtEzQtuhiARvx4LySZn7LQGLzcMBqvMiMocxA0Qm9hFKmEEzy2DtUNePhWTR-105J9Xmz2PMsKH4ef8BceKiNEPnjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />
                                                </div>
                                            </div>
                                            <div className="bottom-title">
                                                <h4 className='text-center'>Duplicate</h4>
                                            </div>
                                        </div>
                                        <div className="group1 flex flex-col gap-4">
                                            <div className="wrap flex gap-2">
                                                <div className="flex-initial w-30 h-24">
                                                    <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/80f5/fb7d/56e8d14d78700f7e999cb657fcd12a4f?Expires=1701043200&Signature=pQk9Cp2lkYRP49aDGgwQPcJJ~Wq~vYGGapsXdHg2qruAsSmI-ZLgUXAsv~ywz1LUqJ2BtfTpWHAz1zPn-qZLeGJ8lOdy3ZJeyZIuLD8J66lgB53qdABpbTiKEM3HFULK~tbBtWuT-~C9YGFl7rtTo3ZAggfxO~Us9Pz7XAjzX21oaNXewZc496hLkWArw-2RC3AW6xyLDA27Cc6bXTJGzcX3E2L3M055kdAYwpMu0Z2XAOixSq74le2M2EoCF4V6WwQKfwz5Nj8eGC43C6L1PUKTzhIEvN~81PJLIZAwoPuQmTpfkafi3pPq2xF6g7Uaqda7hoVljudI43Ew-Eam2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />
                                                </div>
                                                <div className="flex-initial w-30 h-24">
                                                    <img className='bad-cars w-full h-full' src="https://s3-alpha-sig.figma.com/img/80f5/fb7d/56e8d14d78700f7e999cb657fcd12a4f?Expires=1701043200&Signature=pQk9Cp2lkYRP49aDGgwQPcJJ~Wq~vYGGapsXdHg2qruAsSmI-ZLgUXAsv~ywz1LUqJ2BtfTpWHAz1zPn-qZLeGJ8lOdy3ZJeyZIuLD8J66lgB53qdABpbTiKEM3HFULK~tbBtWuT-~C9YGFl7rtTo3ZAggfxO~Us9Pz7XAjzX21oaNXewZc496hLkWArw-2RC3AW6xyLDA27Cc6bXTJGzcX3E2L3M055kdAYwpMu0Z2XAOixSq74le2M2EoCF4V6WwQKfwz5Nj8eGC43C6L1PUKTzhIEvN~81PJLIZAwoPuQmTpfkafi3pPq2xF6g7Uaqda7hoVljudI43Ew-Eam2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />
                                                </div>
                                            </div>
                                            <div className="bottom-title">
                                                <h4 className='text-center'>Duplicate</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" float-right mr-32">
                        <svg width="300" height="649" viewBox="0 0 300 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_28)">
                                <path d="M286.38 646.78C286.38 646.978 286.22 647.137 286.023 647.137C285.826 647.137 285.666 646.978 285.666 646.78H286.38ZM286.38 501.526V646.78H285.666V501.526H286.38ZM76.7371 0.477539C76.7371 86.5398 89.8346 148.13 109.466 195.287C129.098 242.443 155.273 275.188 181.464 303.553C233.842 360.279 286.38 399.551 286.38 501.526H285.666C285.666 399.888 233.383 360.834 180.94 304.037C154.72 275.641 128.484 242.825 108.808 195.562C89.1321 148.3 76.0233 86.6126 76.0233 0.47754L76.7371 0.477539Z" fill="#2B065F" />
                                <path d="M236.854 647.813C236.854 648.01 236.694 648.17 236.497 648.17C236.299 648.17 236.14 648.01 236.14 647.813H236.854ZM236.854 502.32V647.813H236.14V502.32H236.854ZM15.7228 0.445679C15.7228 86.6477 29.537 148.337 50.2444 195.571C70.9513 242.803 98.5604 275.602 126.187 304.014C181.433 360.831 236.853 400.17 236.854 502.32H236.14C236.139 400.522 180.995 361.405 125.675 304.512C98.0194 276.07 70.3458 243.2 49.5906 195.858C28.8361 148.516 15.009 86.7247 15.009 0.445679H15.7228Z" fill="#2B065F" />
                                <path d="M241.536 0.445662C241.536 0.248542 241.376 0.0887451 241.179 0.0887451C240.982 0.0887451 240.822 0.248542 240.822 0.445662H241.536ZM241.536 145.051V0.445662H240.822V145.051H241.536ZM76.7371 647.813C76.7371 562.127 87.0342 500.555 102.469 453.229C117.904 405.907 138.482 372.813 159.07 344.082C179.648 315.365 200.28 290.954 215.746 261.073C231.223 231.171 241.536 195.783 241.536 145.051H240.822C240.822 195.673 230.535 230.948 215.112 260.746C199.678 290.565 179.11 314.889 158.49 343.667C137.877 372.431 117.256 405.592 101.791 453.008C86.3268 500.42 76.0233 562.07 76.0233 647.813H76.7371Z" fill="#916BFF" />
                                <path d="M188.027 647.813C188.027 648.01 187.867 648.17 187.67 648.17C187.473 648.17 187.313 648.01 187.313 647.813H188.027ZM188.027 503.207V647.813H187.313V503.207H188.027ZM76.7364 0.445435C76.7364 171.825 104.549 246.785 132.346 304.228C146.245 332.95 160.176 357.356 170.618 387.231C181.066 417.123 188.027 452.495 188.027 503.207H187.313C187.313 452.567 180.363 417.275 169.944 387.467C159.52 357.643 145.628 333.313 131.704 304.539C103.856 246.992 76.0226 171.924 76.0226 0.445435L76.7364 0.445435Z" fill="#916BFF" />
                                <path d="M110.544 434.414C112.91 434.414 114.827 432.496 114.827 430.131C114.827 427.765 112.91 425.848 110.544 425.848C108.179 425.848 106.261 427.765 106.261 430.131C106.261 432.496 108.179 434.414 110.544 434.414Z" fill="#916BFF" />
                                <path d="M77.1526 54.6313C79.5181 54.6313 81.4356 52.7137 81.4356 50.3483C81.4356 47.9829 79.5181 46.0653 77.1526 46.0653C74.7872 46.0653 72.8696 47.9829 72.8696 50.3483C72.8696 52.7137 74.7872 54.6313 77.1526 54.6313Z" fill="#916BFF" />
                                <path d="M178.623 0.446761C178.623 0.249641 178.464 0.0898438 178.266 0.0898438C178.069 0.0898438 177.909 0.249641 177.909 0.44676L178.623 0.446761ZM178.623 145.707V0.446761L177.909 0.44676V145.707H178.623ZM15.7228 646.78C15.7228 560.705 25.9009 499.102 41.1587 451.933C56.4155 404.768 76.7564 372.02 97.1064 343.656C117.447 315.304 137.843 291.278 153.131 261.634C168.43 231.968 178.623 196.666 178.623 145.707H177.909C177.909 196.559 167.741 231.747 152.496 261.307C137.24 290.889 116.91 314.828 96.526 343.24C76.1511 371.64 55.7666 404.455 40.4795 451.713C25.1935 498.969 15.009 560.649 15.009 646.78H15.7228Z" fill="#F9F8F0" />
                                <path d="M171.754 210.012C174.12 210.012 176.037 208.094 176.037 205.729C176.037 203.363 174.12 201.446 171.754 201.446C169.389 201.446 167.471 203.363 167.471 205.729C167.471 208.094 169.389 210.012 171.754 210.012Z" fill="#F9F8F0" />
                                <path d="M44.8519 187.588C47.2173 187.588 49.1349 185.67 49.1349 183.305C49.1349 180.94 47.2173 179.022 44.8519 179.022C42.4865 179.022 40.5689 180.94 40.5689 183.305C40.5689 185.67 42.4865 187.588 44.8519 187.588Z" fill="#2B065F" />
                                <path d="M282.794 465.649C285.159 465.649 287.077 463.732 287.077 461.366C287.077 459.001 285.159 457.083 282.794 457.083C280.428 457.083 278.511 459.001 278.511 461.366C278.511 463.732 280.428 465.649 282.794 465.649Z" fill="#2B065F" />
                                <path d="M145.812 147.948C148.177 147.948 150.095 146.031 150.095 143.665C150.095 141.3 148.177 139.382 145.812 139.382C143.446 139.382 141.529 141.3 141.529 143.665C141.529 146.031 143.446 147.948 145.812 147.948Z" fill="#F9F8F0" />
                                <path d="M146.34 0.477522C146.34 0.280403 146.18 0.120605 145.983 0.120605C145.786 0.120605 145.626 0.280402 145.626 0.477522H146.34ZM146.339 145.964L146.34 0.477522H145.626L145.626 145.964H146.339ZM15.7228 647.813C15.7228 502.769 38.8227 427.085 65.5701 372.905L64.9301 372.589C38.1242 426.887 15.009 502.685 15.009 647.813H15.7228ZM65.5701 372.905C102.412 298.281 146.339 264.234 146.339 145.964H145.626C145.626 264.013 101.859 297.787 64.9301 372.589L65.5701 372.905Z" fill="#F9F8F0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_28">
                                    <rect width="299.81" height="648.161" fill="white" transform="translate(0.189941 0.0146484)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='data-item flex items-center justify-center pl-8 pr-8 pt-16 pb-16'>
                    <img className='data-image h-full w-full' src='https://s3-alpha-sig.figma.com/img/2836/f4a5/ee8769a37b656bb88d0a8f902b728ccd?Expires=1700438400&Signature=NJE9jjchjNsOFNY6r8F8pgJXzgzFbxvi9HEV35kQtb9S~5Uev0L1NkZxJfPoEep~52lMgaX5lqDJ7wbs25Ln5LpqwrBBEN0IiQGYl9I~0dVTO7s5FRs79SPx7dKYpg7e5HbyrgB4NiRZCQky3~5AwodN~7Y-ov-h-kM8e9kDqGyHoh1MaWs8wukJJFgwlafix~eB18XqifTE5SrsI7ToZ2Ghs0nNbSS3oe3-7ZihY5FKpcNZoBK1UQ2JOtNkPT8YhMkkFdoJkaMeVlQ0Nxk4~ffshUV1zyVOVns-JLJWwGZTqXtbyBCYjLDV6U3T2OCq8Kyb9cGIM~eUnMQsQYeaGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='data-image' />
                </div>
                <div className='data-item flex-col items-start justify-center pt-48'>
                    <div className=''>
                        <span className='data-title flex justify-center lg:text-4xl md:text-4xl sm:text-3xl mb-20'>2. Data interpretation</span>
                        <span className='data-description flex justify-center pr-10 pl-10 sm:pr-20 sm:pl-20 sm:text-lg md:text-xl lg:text-2xl'>Understanding the features, patterns, and anomalies within these datasets is a time-consuming and complex task. Cortal insight provides.</span>
                    </div>
                    <div className="vector float-left mt-8 ml-32">
                        <svg width="300" height="649" viewBox="0 0 300 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_28)">
                                <path d="M286.38 646.78C286.38 646.978 286.22 647.137 286.023 647.137C285.826 647.137 285.666 646.978 285.666 646.78H286.38ZM286.38 501.526V646.78H285.666V501.526H286.38ZM76.7371 0.477539C76.7371 86.5398 89.8346 148.13 109.466 195.287C129.098 242.443 155.273 275.188 181.464 303.553C233.842 360.279 286.38 399.551 286.38 501.526H285.666C285.666 399.888 233.383 360.834 180.94 304.037C154.72 275.641 128.484 242.825 108.808 195.562C89.1321 148.3 76.0233 86.6126 76.0233 0.47754L76.7371 0.477539Z" fill="#2B065F" />
                                <path d="M236.854 647.813C236.854 648.01 236.694 648.17 236.497 648.17C236.299 648.17 236.14 648.01 236.14 647.813H236.854ZM236.854 502.32V647.813H236.14V502.32H236.854ZM15.7228 0.445679C15.7228 86.6477 29.537 148.337 50.2444 195.571C70.9513 242.803 98.5604 275.602 126.187 304.014C181.433 360.831 236.853 400.17 236.854 502.32H236.14C236.139 400.522 180.995 361.405 125.675 304.512C98.0194 276.07 70.3458 243.2 49.5906 195.858C28.8361 148.516 15.009 86.7247 15.009 0.445679H15.7228Z" fill="#2B065F" />
                                <path d="M241.536 0.445662C241.536 0.248542 241.376 0.0887451 241.179 0.0887451C240.982 0.0887451 240.822 0.248542 240.822 0.445662H241.536ZM241.536 145.051V0.445662H240.822V145.051H241.536ZM76.7371 647.813C76.7371 562.127 87.0342 500.555 102.469 453.229C117.904 405.907 138.482 372.813 159.07 344.082C179.648 315.365 200.28 290.954 215.746 261.073C231.223 231.171 241.536 195.783 241.536 145.051H240.822C240.822 195.673 230.535 230.948 215.112 260.746C199.678 290.565 179.11 314.889 158.49 343.667C137.877 372.431 117.256 405.592 101.791 453.008C86.3268 500.42 76.0233 562.07 76.0233 647.813H76.7371Z" fill="#916BFF" />
                                <path d="M188.027 647.813C188.027 648.01 187.867 648.17 187.67 648.17C187.473 648.17 187.313 648.01 187.313 647.813H188.027ZM188.027 503.207V647.813H187.313V503.207H188.027ZM76.7364 0.445435C76.7364 171.825 104.549 246.785 132.346 304.228C146.245 332.95 160.176 357.356 170.618 387.231C181.066 417.123 188.027 452.495 188.027 503.207H187.313C187.313 452.567 180.363 417.275 169.944 387.467C159.52 357.643 145.628 333.313 131.704 304.539C103.856 246.992 76.0226 171.924 76.0226 0.445435L76.7364 0.445435Z" fill="#916BFF" />
                                <path d="M110.544 434.414C112.91 434.414 114.827 432.496 114.827 430.131C114.827 427.765 112.91 425.848 110.544 425.848C108.179 425.848 106.261 427.765 106.261 430.131C106.261 432.496 108.179 434.414 110.544 434.414Z" fill="#916BFF" />
                                <path d="M77.1526 54.6313C79.5181 54.6313 81.4356 52.7137 81.4356 50.3483C81.4356 47.9829 79.5181 46.0653 77.1526 46.0653C74.7872 46.0653 72.8696 47.9829 72.8696 50.3483C72.8696 52.7137 74.7872 54.6313 77.1526 54.6313Z" fill="#916BFF" />
                                <path d="M178.623 0.446761C178.623 0.249641 178.464 0.0898438 178.266 0.0898438C178.069 0.0898438 177.909 0.249641 177.909 0.44676L178.623 0.446761ZM178.623 145.707V0.446761L177.909 0.44676V145.707H178.623ZM15.7228 646.78C15.7228 560.705 25.9009 499.102 41.1587 451.933C56.4155 404.768 76.7564 372.02 97.1064 343.656C117.447 315.304 137.843 291.278 153.131 261.634C168.43 231.968 178.623 196.666 178.623 145.707H177.909C177.909 196.559 167.741 231.747 152.496 261.307C137.24 290.889 116.91 314.828 96.526 343.24C76.1511 371.64 55.7666 404.455 40.4795 451.713C25.1935 498.969 15.009 560.649 15.009 646.78H15.7228Z" fill="#F9F8F0" />
                                <path d="M171.754 210.012C174.12 210.012 176.037 208.094 176.037 205.729C176.037 203.363 174.12 201.446 171.754 201.446C169.389 201.446 167.471 203.363 167.471 205.729C167.471 208.094 169.389 210.012 171.754 210.012Z" fill="#F9F8F0" />
                                <path d="M44.8519 187.588C47.2173 187.588 49.1349 185.67 49.1349 183.305C49.1349 180.94 47.2173 179.022 44.8519 179.022C42.4865 179.022 40.5689 180.94 40.5689 183.305C40.5689 185.67 42.4865 187.588 44.8519 187.588Z" fill="#2B065F" />
                                <path d="M282.794 465.649C285.159 465.649 287.077 463.732 287.077 461.366C287.077 459.001 285.159 457.083 282.794 457.083C280.428 457.083 278.511 459.001 278.511 461.366C278.511 463.732 280.428 465.649 282.794 465.649Z" fill="#2B065F" />
                                <path d="M145.812 147.948C148.177 147.948 150.095 146.031 150.095 143.665C150.095 141.3 148.177 139.382 145.812 139.382C143.446 139.382 141.529 141.3 141.529 143.665C141.529 146.031 143.446 147.948 145.812 147.948Z" fill="#F9F8F0" />
                                <path d="M146.34 0.477522C146.34 0.280403 146.18 0.120605 145.983 0.120605C145.786 0.120605 145.626 0.280402 145.626 0.477522H146.34ZM146.339 145.964L146.34 0.477522H145.626L145.626 145.964H146.339ZM15.7228 647.813C15.7228 502.769 38.8227 427.085 65.5701 372.905L64.9301 372.589C38.1242 426.887 15.009 502.685 15.009 647.813H15.7228ZM65.5701 372.905C102.412 298.281 146.339 264.234 146.339 145.964H145.626C145.626 264.013 101.859 297.787 64.9301 372.589L65.5701 372.905Z" fill="#F9F8F0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_28">
                                    <rect width="299.81" height="648.161" fill="white" transform="translate(0.189941 0.0146484)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='data-item flex items-start justify-center p-20 pt-48'>
                    <div className=''>
                        <span className='data-title flex justify-center lg:text-4xl md:text-4xl sm:text-3xl mb-20'>3. Data Fidelity</span>
                        <span className='data-description flex justify-center pr-10 pl-10 sm:pr-20 sm:pl-20 sm:text-lg md:text-xl lg:text-2xl'>Providing data scientists with better data representation and deeper insights can empower them to understand their data thoroughly and use it effectively. </span>
                    </div>
                </div>
                <div className='data-item'>
                    <div className="vector-border flex-col items-start w-10/12 h-fit rounded-lg ">
                        <div className="sample-header p-4">
                            <svg width="169" height="50" viewBox="0 0 169 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M139.781 0.13147H29.2726C13.1824 0.13147 0.138611 13.1762 0.138611 29.2676C0.138611 45.3591 13.1824 58.4038 29.2726 58.4038H139.781C155.871 58.4038 168.915 45.3591 168.915 29.2676C168.915 13.1762 155.871 0.13147 139.781 0.13147Z" fill="#17B26A" />
                                    <path d="M70.6436 21.3554C70.644 20.5265 70.872 19.7137 71.3028 19.0058C71.7338 18.2979 72.351 17.722 73.0872 17.3411C73.8232 16.9603 74.6498 16.7891 75.4766 16.8463C76.3034 16.9036 77.0984 17.1869 77.775 17.6656C78.4517 18.1442 78.9837 18.7997 79.313 19.5602C79.6423 20.3208 79.7563 21.1573 79.6423 21.9781C79.5284 22.7992 79.1911 23.573 78.6671 24.2152C78.1431 24.8572 77.4527 25.343 76.6713 25.6193V36.1807C77.6773 36.5361 78.5252 37.2358 79.0653 38.1561C79.6052 39.0766 79.8025 40.1581 79.6221 41.2098C79.4418 42.2615 78.8955 43.2156 78.0798 43.9034C77.264 44.5912 76.2315 44.9684 75.1643 44.9684C74.0974 44.9684 73.0649 44.5912 72.2491 43.9034C71.4334 43.2156 70.8871 42.2615 70.7066 41.2098C70.5264 40.1581 70.7235 39.0766 71.2636 38.1561C71.8035 37.2358 72.6514 36.5361 73.6574 36.1807V25.6193C72.7758 25.3075 72.0127 24.73 71.4728 23.9664C70.9331 23.2028 70.6434 22.2906 70.6436 21.3554ZM82.05 20.9997L86.8642 16.1853C86.9345 16.1147 87.0241 16.0667 87.1215 16.0472C87.2192 16.0279 87.3203 16.0378 87.4123 16.0759C87.5041 16.1139 87.5827 16.1784 87.6377 16.2612C87.693 16.344 87.7223 16.4414 87.7221 16.5409V19.8484H89.7314C91.0637 19.8484 92.3414 20.3776 93.2833 21.3196C94.2252 22.2616 94.7545 23.5394 94.7545 24.8718V36.1807C95.7605 36.5361 96.6084 37.2358 97.1485 38.1561C97.6884 39.0766 97.8857 40.1581 97.7052 41.2098C97.525 42.2615 96.9787 43.2156 96.1629 43.9034C95.3472 44.5912 94.3146 44.9684 93.2475 44.9684C92.1806 44.9684 91.1481 44.5912 90.3323 43.9034C89.5166 43.2156 88.9702 42.2615 88.7898 41.2098C88.6096 40.1581 88.8067 39.0766 89.3468 38.1561C89.8867 37.2358 90.7346 36.5361 91.7406 36.1807V24.8718C91.7406 24.3388 91.529 23.8278 91.1521 23.451C90.7754 23.074 90.2642 22.8625 89.7314 22.8625H87.7221V26.1699C87.7223 26.2694 87.693 26.3666 87.6377 26.4494C87.5827 26.5322 87.5041 26.5967 87.4123 26.6349C87.3203 26.6729 87.2192 26.6829 87.1215 26.6634C87.0241 26.6439 86.9345 26.5959 86.8642 26.5256L82.05 21.7111C82.0032 21.6643 81.9662 21.609 81.9409 21.5479C81.9156 21.4868 81.9025 21.4213 81.9025 21.3554C81.9025 21.2893 81.9156 21.2238 81.9409 21.1627C81.9662 21.1018 82.0032 21.0464 82.05 20.9997ZM75.1643 19.8484C74.7647 19.8484 74.3815 20.0071 74.0988 20.2896C73.8161 20.5724 73.6574 20.9557 73.6574 21.3554C73.6574 21.7551 73.8161 22.1383 74.0988 22.421C74.3815 22.7035 74.7647 22.8625 75.1643 22.8625C75.564 22.8625 75.9473 22.7035 76.23 22.421C76.5125 22.1383 76.6713 21.7551 76.6713 21.3554C76.6713 20.9557 76.5125 20.5724 76.23 20.2896C75.9473 20.0071 75.564 19.8484 75.1643 19.8484ZM75.1643 38.9376C74.7647 38.9376 74.3815 39.0963 74.0988 39.3788C73.8161 39.6616 73.6574 40.0449 73.6574 40.4446C73.6574 40.8443 73.8161 41.2275 74.0988 41.5102C74.3815 41.7927 74.7647 41.9517 75.1643 41.9517C75.564 41.9517 75.9473 41.7927 76.23 41.5102C76.5125 41.2275 76.6713 40.8443 76.6713 40.4446C76.6713 40.0449 76.5125 39.6616 76.23 39.3788C75.9473 39.0963 75.564 38.9376 75.1643 38.9376ZM91.7406 40.4446C91.7406 40.8443 91.8993 41.2275 92.182 41.5102C92.4647 41.7927 92.8479 41.9517 93.2475 41.9517C93.6472 41.9517 94.0305 41.7927 94.3132 41.5102C94.5957 41.2275 94.7545 40.8443 94.7545 40.4446C94.7545 40.0449 94.5957 39.6616 94.3132 39.3788C94.0305 39.0963 93.6472 38.9376 93.2475 38.9376C92.8479 38.9376 92.4647 39.0963 92.182 39.3788C91.8993 39.6616 91.7406 40.0449 91.7406 40.4446Z" fill="white" />
                                </g>
                            </svg>
                        </div>
                        <div className="classes w-full p-8">
                            <div className="bad-sample gradient-border rounded-lg w-full mb-6">
                                <div className="gradient-content rounded-md w-full bg-black">
                                    <div className="sample-header w-full text-xl p-3">
                                        Class<span className='text-sm ml-24 class-date'>last updated on Nov 2, 2023</span></div>
                                    <div className="class-content p-3 flex-col">
                                        <div className="category vector-border rounded-md p-2 pl-8 pr-8 w-fit">
                                            Class A
                                        </div>
                                        <div className="vector-border rounded-tl-lg rounded-br-lg ml-6 mr-6 m-6">
                                            <div className="sample-header p-3">metadata</div>
                                            <div className="metadata p-3 grid grid-cols-3 gap-2">
                                                <div className="meta-item-header">Field</div>
                                                <div className="meta-item-header">Type</div>
                                                <div className="meta-item-header">Details</div>
                                                <div className="meta-item">color</div>
                                                <div className="meta-item">string</div>
                                                <div className="meta-item">`red`</div>
                                                <div className="meta-item">categorical</div>
                                                <div className="meta-item">enum</div>
                                                <div className="meta-item">[ vehicles, truck ]</div>
                                            </div>
                                        </div>
                                        <div className="category vector-border rounded-md p-2 pl-8 pr-8 w-fit">
                                            Class B
                                        </div>
                                        <div className="vector-border rounded-tl-lg rounded-br-lg ml-6 mr-6 m-6">
                                            <div className="sample-header p-3">metadata</div>
                                            <div className="metadata p-3 grid grid-cols-3 gap-2">
                                                <div className="meta-item-header">Field</div>
                                                <div className="meta-item-header">Type</div>
                                                <div className="meta-item-header">Details</div>
                                                <div className="meta-item-null">NULL</div>
                                                <div className="meta-item-null">NULL</div>
                                                <div className="meta-item-null">NULL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex text-white text-left w-full">
                <div className='flex-initial w-1/2 flex items-end ml-8'>
                    <div className='py-4 grid gap-16 grid-cols-1 mb-20'>
                        <p className="footer-title text-7xl">Keep connected</p>
                        <p className="footer-content text-sm">Be the first to know when we launch</p>
                        <button className='join_btn hover:bg-orange-500 w-fit pr-10 pl-10'>Join product waitlist&#8594;</button>
                    </div>
                </div>
                <div className='flex-initial w-1/2'>
                    <div className="flex justify-end mr-28">
                        <svg width="300" height="649" viewBox="0 0 300 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_28)">
                                <path d="M286.38 646.78C286.38 646.978 286.22 647.137 286.023 647.137C285.826 647.137 285.666 646.978 285.666 646.78H286.38ZM286.38 501.526V646.78H285.666V501.526H286.38ZM76.7371 0.477539C76.7371 86.5398 89.8346 148.13 109.466 195.287C129.098 242.443 155.273 275.188 181.464 303.553C233.842 360.279 286.38 399.551 286.38 501.526H285.666C285.666 399.888 233.383 360.834 180.94 304.037C154.72 275.641 128.484 242.825 108.808 195.562C89.1321 148.3 76.0233 86.6126 76.0233 0.47754L76.7371 0.477539Z" fill="#2B065F" />
                                <path d="M236.854 647.813C236.854 648.01 236.694 648.17 236.497 648.17C236.299 648.17 236.14 648.01 236.14 647.813H236.854ZM236.854 502.32V647.813H236.14V502.32H236.854ZM15.7228 0.445679C15.7228 86.6477 29.537 148.337 50.2444 195.571C70.9513 242.803 98.5604 275.602 126.187 304.014C181.433 360.831 236.853 400.17 236.854 502.32H236.14C236.139 400.522 180.995 361.405 125.675 304.512C98.0194 276.07 70.3458 243.2 49.5906 195.858C28.8361 148.516 15.009 86.7247 15.009 0.445679H15.7228Z" fill="#2B065F" />
                                <path d="M241.536 0.445662C241.536 0.248542 241.376 0.0887451 241.179 0.0887451C240.982 0.0887451 240.822 0.248542 240.822 0.445662H241.536ZM241.536 145.051V0.445662H240.822V145.051H241.536ZM76.7371 647.813C76.7371 562.127 87.0342 500.555 102.469 453.229C117.904 405.907 138.482 372.813 159.07 344.082C179.648 315.365 200.28 290.954 215.746 261.073C231.223 231.171 241.536 195.783 241.536 145.051H240.822C240.822 195.673 230.535 230.948 215.112 260.746C199.678 290.565 179.11 314.889 158.49 343.667C137.877 372.431 117.256 405.592 101.791 453.008C86.3268 500.42 76.0233 562.07 76.0233 647.813H76.7371Z" fill="#916BFF" />
                                <path d="M188.027 647.813C188.027 648.01 187.867 648.17 187.67 648.17C187.473 648.17 187.313 648.01 187.313 647.813H188.027ZM188.027 503.207V647.813H187.313V503.207H188.027ZM76.7364 0.445435C76.7364 171.825 104.549 246.785 132.346 304.228C146.245 332.95 160.176 357.356 170.618 387.231C181.066 417.123 188.027 452.495 188.027 503.207H187.313C187.313 452.567 180.363 417.275 169.944 387.467C159.52 357.643 145.628 333.313 131.704 304.539C103.856 246.992 76.0226 171.924 76.0226 0.445435L76.7364 0.445435Z" fill="#916BFF" />
                                <path d="M110.544 434.414C112.91 434.414 114.827 432.496 114.827 430.131C114.827 427.765 112.91 425.848 110.544 425.848C108.179 425.848 106.261 427.765 106.261 430.131C106.261 432.496 108.179 434.414 110.544 434.414Z" fill="#916BFF" />
                                <path d="M77.1526 54.6313C79.5181 54.6313 81.4356 52.7137 81.4356 50.3483C81.4356 47.9829 79.5181 46.0653 77.1526 46.0653C74.7872 46.0653 72.8696 47.9829 72.8696 50.3483C72.8696 52.7137 74.7872 54.6313 77.1526 54.6313Z" fill="#916BFF" />
                                <path d="M178.623 0.446761C178.623 0.249641 178.464 0.0898438 178.266 0.0898438C178.069 0.0898438 177.909 0.249641 177.909 0.44676L178.623 0.446761ZM178.623 145.707V0.446761L177.909 0.44676V145.707H178.623ZM15.7228 646.78C15.7228 560.705 25.9009 499.102 41.1587 451.933C56.4155 404.768 76.7564 372.02 97.1064 343.656C117.447 315.304 137.843 291.278 153.131 261.634C168.43 231.968 178.623 196.666 178.623 145.707H177.909C177.909 196.559 167.741 231.747 152.496 261.307C137.24 290.889 116.91 314.828 96.526 343.24C76.1511 371.64 55.7666 404.455 40.4795 451.713C25.1935 498.969 15.009 560.649 15.009 646.78H15.7228Z" fill="#F9F8F0" />
                                <path d="M171.754 210.012C174.12 210.012 176.037 208.094 176.037 205.729C176.037 203.363 174.12 201.446 171.754 201.446C169.389 201.446 167.471 203.363 167.471 205.729C167.471 208.094 169.389 210.012 171.754 210.012Z" fill="#F9F8F0" />
                                <path d="M44.8519 187.588C47.2173 187.588 49.1349 185.67 49.1349 183.305C49.1349 180.94 47.2173 179.022 44.8519 179.022C42.4865 179.022 40.5689 180.94 40.5689 183.305C40.5689 185.67 42.4865 187.588 44.8519 187.588Z" fill="#2B065F" />
                                <path d="M282.794 465.649C285.159 465.649 287.077 463.732 287.077 461.366C287.077 459.001 285.159 457.083 282.794 457.083C280.428 457.083 278.511 459.001 278.511 461.366C278.511 463.732 280.428 465.649 282.794 465.649Z" fill="#2B065F" />
                                <path d="M145.812 147.948C148.177 147.948 150.095 146.031 150.095 143.665C150.095 141.3 148.177 139.382 145.812 139.382C143.446 139.382 141.529 141.3 141.529 143.665C141.529 146.031 143.446 147.948 145.812 147.948Z" fill="#F9F8F0" />
                                <path d="M146.34 0.477522C146.34 0.280403 146.18 0.120605 145.983 0.120605C145.786 0.120605 145.626 0.280402 145.626 0.477522H146.34ZM146.339 145.964L146.34 0.477522H145.626L145.626 145.964H146.339ZM15.7228 647.813C15.7228 502.769 38.8227 427.085 65.5701 372.905L64.9301 372.589C38.1242 426.887 15.009 502.685 15.009 647.813H15.7228ZM65.5701 372.905C102.412 298.281 146.339 264.234 146.339 145.964H145.626C145.626 264.013 101.859 297.787 64.9301 372.589L65.5701 372.905Z" fill="#F9F8F0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_28">
                                    <rect width="299.81" height="648.161" fill="white" transform="translate(0.189941 0.0146484)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
