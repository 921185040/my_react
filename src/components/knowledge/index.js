/*
 * @Description: 知识中心
 * @Date: 2021-04-20 14:18:15
 * @Author: LDZ <dongzhi.liu@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React, { useState } from 'react';

function Knowledge() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        知识中心
      </button>
    </div>
  );
}

export default Knowledge;