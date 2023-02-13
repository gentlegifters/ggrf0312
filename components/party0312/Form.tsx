import { passType, roleType } from "@/constants/ggrf0312";
import { formatPhoneNumber } from "@/lib/frontend";
import axios from "axios";
import { Router, useRouter } from "next/router";
import Notiflix from "notiflix";
import { Report } from "notiflix";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const { yupResolver } = require("@hookform/resolvers/yup");

type formValues = {
  role: string;
  pass: string;
  name: string;
  phone: string;
  battle?: string;
  message?: string;
};

export const PartyForm = ({}) => {
  const formRef = useRef(null);
  const router = useRouter();

  const schema = yup.object().shape({
    role: yup.string().required("역할/성별을 선택해 주세요."),
    pass: yup.string().required("패스를 선택해 주세요."),
    name: yup.string().required("닉네임/이름(입금자명)을 입력해 주세요."),
    phone: yup.string().required("휴대폰 번호를 입력해 주세요."),
    battle: yup.string().nullable(),
    message: yup.string().nullable(),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
    reset,
    trigger,
  } = useForm<formValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleContact = (e: any) => {
    const formattedContact = formatPhoneNumber(e.target.value.toString());
    setValue("phone", formattedContact);
  };

  const onSubmitHandler = async (data: any) => {
    Notiflix.Report.init({
      plainText: false,
    });
    const scriptURL: any = process.env.NEXT_PUBLIC_SCRIPT_URL;
    const registerData = new FormData(formRef.current as any);
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: registerData,
    })
      .then((res) => {
        Report.success(
          "신청완료",
          `신청해 주셔서 감사합니다!!<br/><br/>역할/성별: ${
            data.role
          }<br/>패스구분: ${data.pass.split(":")[0]}<br/>닉네임/이름: ${
            data.name
          }<br/>휴대폰번호: ${data.phone}<br/>M&M 참가여부: ${
            data.battle || "-"
          }<br/>신청메세지: ${data.message || "-"}<br/><br/>파티비 ${
            data.pass.split("-")[1]
          }<br/>카카오뱅크 심영보 3333011694865`,
          "확인"
        );
        console.log("SUCCESSFULLY SUBMITTED");
        router.replace("/");
      })
      .catch((err) => {
        Report.failure("신청실패", "다시 한 번 신청해 주세요.", "확인");
        console.log(err);
      });
  };

  return (
    <div className="px-4 sm:px-8 mt-32">
      <div className="mt-20 text-base font-semibold text-gray-800">
        신청하기
      </div>
      <form
        ref={formRef}
        className="space-y-6 sm:space-y-2 mt-8"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="form-group">
          <div className="label">
            역할/성별<span className="text-red-600 text-xs">*</span>
          </div>
          <select
            className="select"
            {...register("role")}
            id="role"
            name="role"
          >
            <option key="empty" value="">
              선택
            </option>
            {Object.keys(roleType).map((key) => (
              <option key={roleType[key]} value={roleType[key]}>
                {roleType[key]}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <div className="label">
            패스 선택<span className="text-red-600 text-xs">*</span>
          </div>
          <select
            className="select"
            {...register("pass")}
            id="pass"
            name="pass"
          >
            <option key="empty" value="">
              선택
            </option>
            {Object.keys(passType).map((key) => (
              <option key={passType[key]} value={passType[key]}>
                {passType[key]}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <div className="label sm:block hidden">
            닉네임/이름<span className="text-red-600 text-xs">*</span>
            <br />
            (입금자명)
          </div>
          <div className="label block sm:hidden">
            닉네임/이름 (입금자명)
            <span className="text-red-600 text-xs">*</span>
          </div>
          <input
            className="input"
            type="text"
            {...register("name")}
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <div className="label">
            휴대폰 번호<span className="text-red-600 text-xs">*</span>
            <br />
          </div>
          <input
            className="input"
            type="text"
            {...register("phone")}
            id="phone"
            name="phone"
            onChange={handleContact}
          />
        </div>
        <div className="form-group">
          <div className="label text-xs sm:block hidden">
            GG Mix & Match
            <br />
            참가 여부
            <br />
            (댄서만, 스윙아웃 가능자)
          </div>
          <div className="label sm:text-xs block sm:hidden">
            GG Mix & Match 참가 여부(댄서만, 스윙아웃 가능자)
          </div>
          <select
            className="select"
            {...register("battle")}
            id="battle"
            name="battle"
          >
            <option key="empty" value="">
              선택
            </option>
            <option key="참가👊" value="참가👊">
              참가👊
            </option>
            <option key="구경할게요👏" value="구경할게요👏">
              구경할게요👏
            </option>
          </select>
        </div>
        <div className="form-group">
          <div className="label">신청 메세지</div>
          <textarea
            className="textarea"
            rows={2}
            {...register("message")}
            id="message"
            name="message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="button disabled:bg-gray-300"
            disabled={isSubmitting || isSubmitted || !isValid}
          >
            신청하기
          </button>
        </div>
      </form>
    </div>
  );
};
