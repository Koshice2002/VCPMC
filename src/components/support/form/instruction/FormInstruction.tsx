import React, { useState }  from 'react';
import '../../../../styles/styles.css'
import { Button, Input, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const FormInstruction: React.FC = () => {

    return ( 
        <> 
            <div className='icon-more'>
                <div className='guide-list'>
                    <div className='group-item'>
                        <div style={{width: '100%', backgroundColor: '#39394D', border: '1px solid transparent', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>
                            <h3 style={{marginLeft: '10px'}}>Danh mục hướng dẫn</h3>
                        </div>
                        <div style={{width: '100%'}}>
                            <h4 style={{marginTop: '30px', marginLeft: '10px', color: '#FF7506'}}>1. Lorem ipsum dolor sit amet</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>2. Consectetur adipiscing elit sed do</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>3. Iusmod tempor incididunt ut labo</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>4. Ut enim ad minim veniam</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>5. Quis nostrud exercitation ullamco</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>6. Excepteur sint occaecat cupidatats</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>7. Sunt in culpa qui officiat</h4>
                            <h4 style={{marginTop: '40px', marginLeft: '10px'}}>8. Sed ut perspiciatis unde omnis iste</h4>
                        </div>
                    </div>
                </div>
                <div className='instruction-content'>
                    <div className='group-item'>
                        <h2 style={{color: '#FF7506'}}>Lorem ipsum dolor sit amet</h2>
                        <div style={{width: '100%', height: '750px', marginTop: '-50px'}}>
                            <p style={{ maxHeight: '700px', width: '1157px', margin: '40px 24px', overflowY: 'auto'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas:

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInstruction;
