import React, { useState, useEffect } from 'react';

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect
} from '@coreui/react'

import CIcon from '@coreui/icons-react';

import {
  AccountBalanceWalletOutlined,
  LocalHospitalOutlined,
  Healing,
  WcOutlined,
  SchoolOutlined,
  PeopleOutline,
  ExploreOutlined,
  Event,
  AttachMoneyOutlined,
  ReceiptOutlined,
  QueryBuilderOutlined,
  DateRangeOutlined,
  ExtensionOutlined,
  AccessibleOutlined,
  PaymentOutlined,
  EmojiPeopleOutlined,
  CategoryOutlined
} from '@material-ui/icons';

const Moradores = ({setInputResident, residentNumber }) => {

  const [inputResidents, setInputResidents] = useState({
    resident: "",
    kinship: "",
    sex: "",
    bornDate: "",
    education: "",
    mainSourceOfIncome: "",
    generatesIncomeForFamily: undefined,
    workingTimeonTheLandPlot: "",
    issueTheInvoice: undefined,
    exBeneficiary: undefined,
    activity: "",
    demotivatingActivity: "",
    retired: undefined,
    paidWorkOffTheLandPlot: undefined,
    initialAgeOffTheLandPlot: "",
    handicapped: undefined,
    typesOfDisabilities: "",
    mentalDisorder: undefined,
    needsCare: undefined,
    haveCaregiver: undefined,
    organizationCare: undefined,
    whoCares: "",
    deficientActivity: "",
    previousDiseases: "",
    typeOfTreatment: "",
    formOfAccessToTreatment: "",
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInputResidents({ ...inputResidents, [name]: value })

    setInputResident(inputResidents)
  }

  return (
    <>
      <h4>Morador {residentNumber}</h4>
      <div className="row">
        <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-7">
          <CInputGroupPrepend>
            <CInputGroupText>
              <CIcon name="cil-user" />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="resident"
            placeholder="Residente"
            value={inputResidents.resident}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <PeopleOutline style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="kinship"
            placeholder="Parentesco"
            value={inputResidents.kinship}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <WcOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="sex"
            placeholder="Sexo"
            value={inputResidents.sex}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Event style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="bornDate"
            placeholder="Data de nascimento"
            value={inputResidents.bornDate}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
          <CInputGroupPrepend>
            <CInputGroupText>
              <SchoolOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="education"
            placeholder="Escolaridade"
            value={inputResidents.education}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="mainSourceOfIncome"
            placeholder="Principal fonte de renda"
            value={inputResidents.mainSourceOfIncome}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.generatesIncomeForFamily}
            name="generatesIncomeForFamily"
            id="select"
          >
            <option value={undefined} hidden>Gera renda para a família</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <QueryBuilderOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="workingTimeonTheLandPlot"
            placeholder="Tempo de trabalho no lote"
            value={inputResidents.workingTimeonTheLandPlot}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ReceiptOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.issueTheInvoice}
            name="issueTheInvoice"
            id="select"
          >
            <option value={undefined} hidden>Emitir NF</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <DateRangeOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.exBeneficiary}
            name="exBeneficiary"
            id="select"
          >
            <option value={undefined} hidden>Ex-Beneficiário</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ExtensionOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="activity"
            placeholder="Atividade"
            value={inputResidents.activity}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ExtensionOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="demotivatingActivity"
            placeholder="Atividade Desmotivador"
            value={inputResidents.demotivatingActivity}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccountBalanceWalletOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.retired}
            name="retired"
            id="select"
          >
            <option value={undefined} hidden>Aposentado</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.paidWorkOffTheLandPlot}
            name="paidWorkOffTheLandPlot"
            id="select"
          >
            <option value={undefined} hidden>Trabalho remunerado fora do lote</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <DateRangeOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="initialAgeOffTheLandPlot"
            placeholder="Trab. fora do lote idade incial"
            value={inputResidents.initialAgeOffTheLandPlot}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.handicapped}
            name="handicapped"
            id="select"
            required
          >
            <option value={undefined} hidden>Deficiência</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        {inputResidents.handicapped === "true" ? (
          <>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="typesOfDisabilities"
                placeholder="Deficiências"
                value={inputResidents.typesOfDisabilities}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.mentalDisorder}
                name="mentalDisorder"
                id="select"
              >
                <option value={undefined} hidden>Transtorno Mental</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <Healing style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.needsCare}
                name="needsCare"
                id="select"
              >
                <option value={undefined} hidden>Precisa de Cuidados</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <EmojiPeopleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.haveCaregiver}
                name="haveCaregiver"
                id="select"
              >
                <option value={undefined} hidden>Tem cuidador</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CategoryOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.organizationCare}
                name="organizationCare"
                id="select"
              >
                <option value={undefined} hidden>Organização Cuidados</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <ExploreOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="whoCares"
                placeholder="Quem cuida"
                value={inputResidents.whoCares}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <ExploreOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="deficientActivity"
                placeholder="Atividade"
                value={inputResidents.deficientActivity}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
          </>
        ) : false
        }
        <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
          <CInputGroupPrepend>
            <CInputGroupText>
              <LocalHospitalOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="previousDiseases"
            placeholder="Doenças que tem ou teve nos últimos 2 anos"
            value={inputResidents.previousDiseases}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Healing style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="typeOfTreatment"
            placeholder="Tipo de tratamento"
            value={inputResidents.typeOfTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <PaymentOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="formOfAccessToTreatment"
            placeholder="Forma de acesso para tratamento"
            value={inputResidents.formOfAccessToTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
      </div>
    </>
  )
}

export default Moradores;