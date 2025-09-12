import{j as e,r as g}from"./index-BWM6UHr8.js";import{c as D,C as S}from"./ComponentTemplate-ClBHhBQ8.js";const b=D((i,c)=>({modals:{},openModal:(l,t,s)=>{i(r=>({modals:{...r.modals,[l]:{id:l,isOpen:!0,data:t,zIndex:s||1e3}}}))},closeModal:l=>{i(t=>({modals:{...t.modals,[l]:{...t.modals[l],isOpen:!1}}}))},closeAllModals:()=>{i(l=>{const t={...l.modals};return Object.keys(t).forEach(s=>{t[s]={...t[s],isOpen:!1}}),{modals:t}})},getModal:l=>c().modals[l],isModalOpen:l=>{var t;return((t=c().modals[l])==null?void 0:t.isOpen)||!1}})),O=()=>{const{openModal:i,closeModal:c,isModalOpen:l}=b(),t=()=>{i("basic-modal")},s=()=>{c("basic-modal")},r=m=>{m.target===m.currentTarget&&s()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-4",children:e.jsx("button",{onClick:t,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"打开基础 Modal"})}),e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["Modal 状态: ",l("basic-modal")?"已打开":"已关闭"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"提示：点击遮罩层或按 ESC 键也可以关闭 Modal"})]}),l("basic-modal")&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:r,children:e.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"基础 Modal"}),e.jsx("button",{onClick:s,className:"text-gray-400 hover:text-gray-600 text-xl leading-none","aria-label":"关闭",children:"×"})]}),e.jsx("p",{className:"text-gray-600 mb-6",children:"这是一个基础 Modal 演示，通过 Zustand store 管理状态。"}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"取消"}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"确定"})]})]})})]})},A=()=>{var a;const{openModal:i,closeModal:c,isModalOpen:l,getModal:t}=b(),[s,r]=g.useState({name:"",email:"",age:""}),m=()=>{i("data-modal",s)},u=()=>{c("data-modal")},p=o=>{o.target===o.currentTarget&&u()},d=(a=t("data-modal"))==null?void 0:a.data;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"用户信息"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"姓名",value:s.name,onChange:o=>r({...s,name:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"email",placeholder:"邮箱",value:s.email,onChange:o=>r({...s,email:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"number",placeholder:"年龄",value:s.age,onChange:o=>r({...s,age:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"操作"}),e.jsx("div",{className:"space-y-2",children:e.jsx("button",{onClick:m,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"打开带数据的 Modal"})})]})]}),e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["Modal 状态: ",l("data-modal")?"已打开":"已关闭"]}),d&&e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-medium",children:"Modal 中的数据:"}),e.jsx("pre",{className:"bg-white p-2 rounded mt-1 text-xs",children:JSON.stringify(d,null,2)})]})]}),l("data-modal")&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:p,children:e.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户信息确认"}),e.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-600 text-xl leading-none","aria-label":"关闭",children:"×"})]}),e.jsxs("div",{className:"space-y-2 mb-6",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",(d==null?void 0:d.name)||"未填写"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",(d==null?void 0:d.email)||"未填写"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"年龄:"})," ",(d==null?void 0:d.age)||"未填写"]})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{onClick:u,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"取消"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"确认"})]})]})})]})},I=()=>{const{openModal:i,closeModal:c,isModalOpen:l}=b(),t="wizard-modal",[s,r]=g.useState(1),[m,u]=g.useState(!1),[p,d]=g.useState(""),[a,o]=g.useState({name:"",email:"",phone:"",department:"",role:"",salary:""}),f=()=>{r(1),u(!1),d(""),o({name:"",email:"",phone:"",department:"",role:"",salary:""})},v=()=>{f(),i(t,{})},x=()=>{c(t)},y=n=>{n.target===n.currentTarget&&x()},M=()=>{const n=[];return a.name||n.push("姓名不能为空"),a.email||n.push("邮箱不能为空"),a.phone||n.push("电话不能为空"),n},N=async()=>new Promise((n,k)=>{setTimeout(()=>{Math.random()>.1?n({success:!0}):k(new Error("保存失败"))},1200)}),j=()=>{const n=M();if(n.length){alert(`请修正：
`+n.join(`
`));return}r(2)},w=async()=>{try{u(!0),await N(),d("保存成功"),r(3)}catch{d("保存失败，请重试"),r(3)}finally{u(!1)}},C=()=>s===1?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx("input",{type:"text",value:a.name,onChange:n=>o({...a,name:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:a.email,onChange:n=>o({...a,email:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"电话"}),e.jsx("input",{type:"tel",value:a.phone,onChange:n=>o({...a,phone:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"部门"}),e.jsxs("select",{value:a.department,onChange:n=>o({...a,department:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"请选择"}),e.jsx("option",{value:"技术部",children:"技术部"}),e.jsx("option",{value:"销售部",children:"销售部"}),e.jsx("option",{value:"人事部",children:"人事部"}),e.jsx("option",{value:"财务部",children:"财务部"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"职位"}),e.jsx("input",{type:"text",value:a.role,onChange:n=>o({...a,role:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"薪资"}),e.jsx("input",{type:"number",value:a.salary,onChange:n=>o({...a,salary:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{onClick:j,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"下一步"})})]}):s===2?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"信息预览"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",a.name||"-"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",a.email||"-"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"电话:"})," ",a.phone||"-"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"部门:"})," ",a.department||"-"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"职位:"})," ",a.role||"-"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"薪资:"})," ",a.salary||"-"]})]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{onClick:()=>r(1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"上一步"}),e.jsx("button",{onClick:w,disabled:m,className:`px-4 py-2 text-white rounded ${m?"bg-blue-300":"bg-blue-500 hover:bg-blue-600"}`,children:m?"保存中…":"确认并保存"})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:`p-3 rounded ${p.includes("成功")?"bg-green-50":"bg-red-50"}`,children:e.jsx("p",{className:`text-sm ${p.includes("成功")?"text-green-700":"text-red-700"}`,children:p})}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>r(1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"再填一条"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"关闭"})]})]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:v,className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700",children:"打开员工信息向导"}),l(t)&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:y,children:e.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"员工信息向导"}),e.jsx("button",{onClick:x,className:"text-gray-400 hover:text-gray-600 text-xl leading-none","aria-label":"关闭",children:"×"})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-6 text-sm",children:[e.jsx("span",{className:`px-2 py-1 rounded ${s===1?"bg-blue-600 text-white":"bg-gray-200"}`,children:"1. 输入"}),e.jsx("span",{className:"text-gray-400",children:"→"}),e.jsx("span",{className:`px-2 py-1 rounded ${s===2?"bg-blue-600 text-white":"bg-gray-200"}`,children:"2. 预览"}),e.jsx("span",{className:"text-gray-400",children:"→"}),e.jsx("span",{className:`px-2 py-1 rounded ${s===3?"bg-blue-600 text-white":"bg-gray-200"}`,children:"3. 结果"})]}),C()]})})]})},z=`import React from 'react';
import { useModalStore } from '../stores/modalStore';

const BasicModalDemo: React.FC = () => {
  const { openModal, closeModal, isModalOpen } = useModalStore();

  const handleOpenModal = () => {
    openModal('basic-modal');
  };

  const handleCloseModal = () => {
    closeModal('basic-modal');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          打开基础 Modal
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          Modal 状态: {isModalOpen('basic-modal') ? '已打开' : '已关闭'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          提示：点击遮罩层或按 ESC 键也可以关闭 Modal
        </p>
      </div>

      {/* Modal 组件 */}
      {isModalOpen('basic-modal') && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">基础 Modal</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                aria-label="关闭"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              这是一个基础 Modal 演示，通过 Zustand store 管理状态。
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                取消
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicModalDemo;
`,E=`import React, { useState } from 'react';
import { useModalStore } from '../stores/modalStore';

const ModalWithDataDemo: React.FC = () => {
  const { openModal, closeModal, isModalOpen, getModal } = useModalStore();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleOpenModal = () => {
    openModal('data-modal', userData);
  };

  const handleCloseModal = () => {
    closeModal('data-modal');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const modalData = getModal('data-modal')?.data;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2">用户信息</h4>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="姓名"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="邮箱"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="年龄"
              value={userData.age}
              onChange={(e) => setUserData({ ...userData, age: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">操作</h4>
          <div className="space-y-2">
            <button
              onClick={handleOpenModal}
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              打开带数据的 Modal
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600 mb-2">
          Modal 状态: {isModalOpen('data-modal') ? '已打开' : '已关闭'}
        </p>
        {modalData && (
          <div className="text-sm">
            <p className="font-medium">Modal 中的数据:</p>
            <pre className="bg-white p-2 rounded mt-1 text-xs">
              {JSON.stringify(modalData, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Modal 组件 */}
      {isModalOpen('data-modal') && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">用户信息确认</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                aria-label="关闭"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 mb-6">
              <p><strong>姓名:</strong> {modalData?.name || '未填写'}</p>
              <p><strong>邮箱:</strong> {modalData?.email || '未填写'}</p>
              <p><strong>年龄:</strong> {modalData?.age || '未填写'}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                取消
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWithDataDemo;
`,h=`import React, { useState } from "react";

import { useModalStore } from "../stores/modalStore";

// 高级示例：单一向导式 Modal（输入 -> 预览 -> 结果）
const AdvancedModalDemo: React.FC = () => {
  const { openModal, closeModal, isModalOpen } = useModalStore();

  const MODAL_ID = "wizard-modal";

  type Step = 1 | 2 | 3;
  const [step, setStep] = useState<Step>(1);
  const [isSaving, setIsSaving] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    salary: "",
  });

  const resetWizard = () => {
    setStep(1);
    setIsSaving(false);
    setResultMsg("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      role: "",
      salary: "",
    });
  };

  const handleOpen = () => {
    resetWizard();
    openModal(MODAL_ID, {});
  };

  const handleClose = () => {
    closeModal(MODAL_ID);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // 基础校验
  const validate = () => {
    const errors: string[] = [];
    if (!formData.name) errors.push("姓名不能为空");
    if (!formData.email) errors.push("邮箱不能为空");
    if (!formData.phone) errors.push("电话不能为空");
    return errors;
  };

  // 模拟异步保存
  const fakeSave = async () =>
    new Promise<{ success: boolean }>((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1
          ? resolve({ success: true })
          : reject(new Error("保存失败"));
      }, 1200);
    });

  const handleNextFromStep1 = () => {
    const errors = validate();
    if (errors.length) {
      alert("请修正：\\n" + errors.join("\\n"));
      return;
    }
    setStep(2);
  };

  const handleConfirmAndSave = async () => {
    try {
      setIsSaving(true);
      await fakeSave();
      setResultMsg("保存成功");
      setStep(3);
    } catch (_err) {
      setResultMsg("保存失败，请重试");
      setStep(3);
    } finally {
      setIsSaving(false);
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓名
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                电话
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                部门
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">请选择</option>
                <option value="技术部">技术部</option>
                <option value="销售部">销售部</option>
                <option value="人事部">人事部</option>
                <option value="财务部">财务部</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                职位
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                薪资
              </label>
              <input
                type="number"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleNextFromStep1}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              下一步
            </button>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded">
            <h4 className="text-sm font-medium mb-2">信息预览</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <strong>姓名:</strong> {formData.name || "-"}
              </p>
              <p>
                <strong>邮箱:</strong> {formData.email || "-"}
              </p>
              <p>
                <strong>电话:</strong> {formData.phone || "-"}
              </p>
              <p>
                <strong>部门:</strong> {formData.department || "-"}
              </p>
              <p>
                <strong>职位:</strong> {formData.role || "-"}
              </p>
              <p>
                <strong>薪资:</strong> {formData.salary || "-"}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              上一步
            </button>
            <button
              onClick={handleConfirmAndSave}
              disabled={isSaving}
              className={\`px-4 py-2 text-white rounded \${
                isSaving ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }\`}
            >
              {isSaving ? "保存中…" : "确认并保存"}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div
          className={\`p-3 rounded \${
            resultMsg.includes("成功") ? "bg-green-50" : "bg-red-50"
          }\`}
        >
          <p
            className={\`text-sm \${
              resultMsg.includes("成功") ? "text-green-700" : "text-red-700"
            }\`}
          >
            {resultMsg}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setStep(1)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            再填一条
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            关闭
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        打开员工信息向导
      </button>

      {isModalOpen(MODAL_ID) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">员工信息向导</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                aria-label="关闭"
              >
                ×
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 text-sm">
              <span
                className={\`px-2 py-1 rounded \${
                  step === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                }\`}
              >
                1. 输入
              </span>
              <span className="text-gray-400">→</span>
              <span
                className={\`px-2 py-1 rounded \${
                  step === 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                }\`}
              >
                2. 预览
              </span>
              <span className="text-gray-400">→</span>
              <span
                className={\`px-2 py-1 rounded \${
                  step === 3 ? "bg-blue-600 text-white" : "bg-gray-200"
                }\`}
              >
                3. 结果
              </span>
            </div>

            {renderStep()}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedModalDemo;
`,F=`import { create } from 'zustand';
import { Modal, ModalData, ModalState } from '../types';

export const useModalStore = create<ModalState>((set, get) => ({
  modals: {},

  openModal: (id: string, data?: ModalData, zIndex?: number) => {
    set((state) => ({
      modals: {
        ...state.modals,
        [id]: {
          id,
          isOpen: true,
          data,
          zIndex: zIndex || 1000,
        },
      },
    }));
  },

  closeModal: (id: string) => {
    set((state) => ({
      modals: {
        ...state.modals,
        [id]: {
          ...state.modals[id],
          isOpen: false,
        },
      },
    }));
  },

  closeAllModals: () => {
    set((state) => {
      const updatedModals = { ...state.modals };
      Object.keys(updatedModals).forEach((id) => {
        updatedModals[id] = {
          ...updatedModals[id],
          isOpen: false,
        };
      });
      return { modals: updatedModals };
    });
  },

  getModal: (id: string) => {
    return get().modals[id];
  },

  isModalOpen: (id: string) => {
    return get().modals[id]?.isOpen || false;
  },
}));
`,B=()=>e.jsx(S,{title:"全局 Modal 管理",description:"使用 Zustand 实现全局 Modal 管理：统一 API、数据传递、单实例模态规范与向导式流程。",overview:[{title:"核心概念",items:["通过单一 store 集中管理所有 Modal 状态（是否打开、数据、层级）。","单实例模态规范：关键流程同一时刻只显示一个 Modal。","支持向 Modal 传递与读取数据，形成预览与确认的闭环。","API：openModal、closeModal、closeAllModals、isModalOpen、getModal。"]},{title:"主要优势",items:["统一管理、统一 API，降低心智负担。","配合向导式模式，承载复杂业务流程（输入→预览→结果）。","数据流清晰：页面→Modal（输入）→确认→结果反馈。","按需渲染，避免不必要的重渲染。"]},{title:"适用场景",items:["表单收集 + 预览确认 + 结果反馈的流程。","复杂业务数据的多步提交流程。","需要全局统一控制与统计的弹窗体系。"]},{title:"注意事项",items:["避免并行打开多个关键流程 Modal，入口在外部、切换在内部。","遮罩层会阻断外部交互，关闭应在 Modal 内完成。","仅传递必要数据，注意判空与默认值。"]}],examples:[{title:"基础 Modal 演示",component:e.jsx(O,{}),description:"最简开关与内部关闭方式展示（X/按钮/点击遮罩）。",observationPoints:["仅保留外部“打开”入口，关闭在 Modal 内部完成。","观察 isModalOpen 随状态变化的展示。"],keyPoints:["openModal/closeModal 的基本配合。","遮罩层点击关闭与顶部关闭按钮。"],commonTraps:["在外部放置关闭按钮导致语义不清。","未处理遮罩点击关闭。"],solutions:["将关闭操作收敛在 Modal 内部。","提供多种、清晰的关闭方式。"],codeExample:{code:z,title:"基础 Modal 演示组件"}},{title:"带数据的 Modal 演示",component:e.jsx(A,{}),description:"向 Modal 传递与读取数据，展示动态内容。",observationPoints:["外部表单填入数据 → 打开 Modal → 在 Modal 中读取并展示。","数据变化后的重新渲染表现。"],keyPoints:["openModal 第二个参数传递数据。","getModal 配合选择性读取数据。"],commonTraps:["未判空导致渲染报错。","传递过大数据对象造成不必要渲染。"],solutions:["判空与默认值。","仅传递必要字段。"],codeExample:{code:E,title:"带数据的 Modal 演示组件"}},{title:"高级 Modal（向导式）",component:e.jsx(I,{}),description:"单实例向导：输入 → 预览 → 结果。在一个 Modal 内闭环完成复杂流程。",observationPoints:["入口在外部，流程全部在 Modal 内部推进。","第一步校验、第二步预览确认、第三步结果反馈。","异步保存状态（loading/成功/失败提示）。"],keyPoints:["单实例模态规范避免遮罩阻断外部点击的问题。","表单校验、数据预览与确认的闭环实践。","统一 API 与数据流，便于扩展与测试。"],commonTraps:["试图用多个并行 Modal 承载一个流程，造成遮罩交互困境。","缺少校验与错误提示，导致体验断裂。"],solutions:["用向导式单 Modal 承载复杂流程。","标准化的校验与结果反馈。"],codeExample:{code:h,title:"高级 Modal 向导组件"}}],tutorial:{concepts:["单实例模态规范：关键流程只打开一个 Modal。","输入→预览→结果的向导式闭环。","以 openModal(data) 作为数据入口，以确认/保存作为输出。"],steps:["实现 store：open/close/isOpen/getModal。","实现基础打开/关闭与遮罩点击关闭。","为 Modal 注入数据与判空处理。","实现向导式步骤与异步保存状态机。"],tips:["入口在外部、切换在内部。","避免并行多 Modal；确需多个场景建议拆时序。","仅传递必要数据，配合类型定义约束字段。"]},interview:{questions:[{question:"为什么建议使用单实例向导式 Modal？",answer:"遮罩层会阻断页面其他交互，单实例可避免并行模态互相干扰；向导式更契合复杂流程。"},{question:"如何向 Modal 传递并读取数据？",answer:"openModal(id, data) 传入；组件内通过 getModal(id)?.data 读取并渲染。"},{question:"如何处理异步保存与反馈？",answer:"在 Modal 内部维护 loading/结果文案，保存成功或失败后给出清晰反馈并可选择重试或关闭。"}],keyPoints:["单实例模态 + 向导式闭环。","最小化数据传递与严格判空。","清晰的关闭路径与可访问性。"]},bestPractices:{dos:["入口在外部、关闭在内部。","使用单实例模态承载关键流程。","提供多种关闭方式（按钮/遮罩/ESC）。","只传递必要字段，保证渲染可控。"],donts:["不要并行打开多个关键流程 Modal。","不要在外部放置关闭按钮造成语义混乱。","不要忽视错误与结果反馈。"],patterns:["向导模式：输入→预览→结果。","数据注入：openModal(id, data) 与 getModal(id) 读取。","统一 API：open/close/isOpen/getModal/closeAll。"]},codeExamples:[{title:"Modal Store 定义",code:F,language:"typescript"},{title:"高级 Modal 向导组件",code:h,language:"tsx"}]});export{B as default};
