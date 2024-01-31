import { FunctionComponent, useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Instructions.module.css";

const Instructions: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.instructions}>
        <div className={styles.div}>
          <div className={styles.gettingStartedBehaviour}>
            <div className={styles.definingStylingLayoutsParent}>
              <div className={styles.definingStylingContainer}>
                <p className={styles.defining}>{`Defining `}</p>
                <p className={styles.defining}>{`Styling & Layouts`}</p>
              </div>
              <div className={styles.gettingStarted}>Getting Started</div>
            </div>
            <div
              className={styles.inTheStyling}
            >{`In the Styling & Layouts tab you can define how your layers look across different screen sizes, and different states.`}</div>
            <div className={styles.niceJobYouve}>
              Nice job! You’ve added a hover effect to your button!
            </div>
            <div className={styles.selectThePurpleViewFullGParent}>
              <div className={styles.selectThePurpleContainer}>
                <span>{`Select the purple “View full gallery” button on the design to the right and tag it as a `}</span>
                <b>Button</b>
                <span>.</span>
              </div>
              <div className={styles.selectTheLayerParent}>
                <b className={styles.selectTheLayer}>Select the LAYER</b>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>1</b>
                </div>
              </div>
            </div>
            <div className={styles.youCanThen}>
              You can then tweak the animation settings as you like, and hit
              done.
            </div>
            <div className={styles.thenChooseThe}>
              Then, choose the “Shadow pop” animation
            </div>
            <div className={styles.gettingStartedBehaviourInner}>
              <div className={styles.nowLetsAddAHoverEffectParent}>
                <div
                  className={styles.nowLetsAdd}
                >{`Now, let’s add a hover effect to this button. In the Styling & Layouts tab, click on the Hover tab. `}</div>
                <div className={styles.addHoverStateParent}>
                  <b className={styles.selectTheLayer}>Add hover state</b>
                  <div className={styles.ellipseParent}>
                    <div className={styles.groupChild} />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
            <div className={styles.gettingStartedBehaviourChild} />
            <img
              className={styles.gettingStartedBehaviourItem}
              alt=""
              src="/group-751.svg"
            />
            <div className={styles.image16Parent}>
              <img
                className={styles.image16Icon1}
                alt=""
                src="/image-161@2x.png"
              />
              <div className={styles.groupInner} />
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.child} />
            <b className={styles.b2}>2</b>
          </div>
        </div>
        <b className={styles.instructions1}>Instructions</b>
        <div className={styles.gettingStartedTagging}>
          <div className={styles.taggingYourLayersParent}>
            <div className={styles.taggingYourLayers}>Tagging your Layers</div>
            <div className={styles.gettingStarted1}>Getting Started</div>
          </div>
          <div
            className={styles.startByTagging}
          >{`Start by tagging the layers on this  Fickle Flight Figma file. `}</div>
          <div className={styles.greatJobYouve}>
            Great job! You’ve just tagged a button! Let’s try tagging another
            layer.
          </div>
          <div className={styles.awesomeYouveNowContainer}>
            <span>{`Awesome! You’ve now tagged a `}</span>
            <b>button</b>
            <span>{` and an `}</span>
            <b>autocomplete</b>
            <span>.</span>
          </div>
          <div className={styles.selectTheSearchFlightsBuParent}>
            <div className={styles.selectThePurpleContainer}>
              <span>{`Select the “Search Flights” button on the design to the right and select `}</span>
              <b>Button</b>
              <span> in the Tag Layers widget in the Locofy plugin</span>
            </div>
            <div className={styles.selectTheLayerParent}>
              <b className={styles.selectTheLayer}>Select the LAYER</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b}>1</b>
              </div>
            </div>
          </div>
          <div className={styles.selectTheArrivalFieldOnParent}>
            <div className={styles.selectThePurpleContainer}>
              <span>{`Select the “Arrival field” on the design and select `}</span>
              <b>Autocomplete</b>
              <span> on the Tag Layers widget in the plugin.</span>
            </div>
            <div className={styles.selectTheLayerParent}>
              <b className={styles.selectTheLayer}>Select the LAYER</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b}>1</b>
              </div>
            </div>
          </div>
          <div className={styles.gettingStartedTaggingInner}>
            <div className={styles.forNowSelectNoneForThisParent}>
              <div className={styles.nowLetsAdd}>
                <p className={styles.defining}>
                  <span
                    className={styles.forNowSelect}
                  >{`For now, select `}</span>
                  <b className={styles.forNowSelect}>None</b>
                  <span>{` for this Button example. `}</span>
                </p>
                <p className={styles.defining}>
                  You’ll see how to work with UI libraries later!
                </p>
              </div>
              <div className={styles.selectUiLibraryParent}>
                <b className={styles.selectTheLayer}>Select UI Library</b>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>2</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gettingStartedTaggingChild}>
            <div className={styles.nowLetsAddAHoverEffectParent}>
              <div className={styles.nowLetsAdd}>
                {`This Autocomplete comes from the `}
                <a
                  className={styles.materialUiDesignKit}
                  href="https://material-ui.com/store/items/figma-react/"
                  target="_blank"
                >
                  <span className={styles.materialUiDesign}>
                    Material UI design kit
                  </span>
                </a>
                , so please select Material UI. Then, choose the outlined
                variation.
              </div>
              <div className={styles.selectUiLibraryVariationParent}>
                <b
                  className={styles.selectTheLayer}
                >{`Select UI Library & Variation`}</b>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>2</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.youCanEditAttributesForYoParent}>
            <div className={styles.selectThePurpleContainer}>
              You can edit attributes for your button. For now, leave these
              attributes as default.
            </div>
            <div className={styles.editBasicAndAdvancedAttribParent}>
              <b className={styles.editBasicAnd}>
                edit basic and advanceD attributes
              </b>
              <div className={styles.ellipseParent3}>
                <div className={styles.groupChild4} />
                <b className={styles.b7}>3</b>
              </div>
            </div>
          </div>
          <div className={styles.gettingStartedTaggingItem} />
          <div className={styles.lineDiv} />
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          <div className={styles.image11Parent}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.image13Parent}>
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
            <div className={styles.groupChild6} />
          </div>
          <div className={styles.tryTaggingA}>TRY: tagging a button</div>
          <div className={styles.taggingAnAutocomplete}>
            tagging aN AUTOCOMPLETE
          </div>
          <img className={styles.groupIcon} alt="" src="/group-7511@2x.png" />
          <div className={styles.image15Parent}>
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
            <div className={styles.groupChild7} />
          </div>
          <div className={styles.leaveTheOther}>
            Leave the other attributes unchanged for now.
          </div>
          <div className={styles.inTheAttributesSectionLooParent}>
            <div className={styles.selectThePurpleContainer}>
              In the attributes section, look for “Options” and add a few items.
              Eg. Norway, Italy, Spain
            </div>
            <div className={styles.editBasicAndAdvancedAttribParent}>
              <b className={styles.editBasicAnd}>edit attributes</b>
              <div className={styles.ellipseParent3}>
                <div className={styles.groupChild4} />
                <b className={styles.b7}>5</b>
              </div>
            </div>
          </div>
          <div className={styles.selectAPalletteThatFitsThParent}>
            <div className={styles.selectThePurpleContainer}>
              Select a pallette that fits the colors of your selected component
            </div>
            <div className={styles.editBasicAndAdvancedAttribParent}>
              <b className={styles.editBasicAnd}>Select a pallette</b>
              <div className={styles.ellipseParent3}>
                <div className={styles.groupChild4} />
                <b className={styles.b7}>4</b>
              </div>
            </div>
          </div>
          <div className={styles.aDefaultDropdownHasBeenApParent}>
            <div className={styles.selectThePurpleContainer}>
              A default dropdown has been applied to your autocomplete which you
              can change using Link Mode. Loco can show you which dropdown to
              select!
            </div>
            <img className={styles.group2Icon} alt="" src="/group2.svg" />
            <div className={styles.editBasicAndAdvancedAttribParent}>
              <b className={styles.editBasicAnd}>Link Mode</b>
              <div className={styles.ellipseParent3}>
                <div className={styles.groupChild4} />
                <b className={styles.b7}>3</b>
              </div>
            </div>
          </div>
          <div className={styles.gettingStartedTaggingInner1}>
            <div className={styles.image14Parent}>
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-14@2x.png"
              />
              <div className={styles.groupChild11} />
            </div>
          </div>
          <img
            className={styles.gettingStartedTaggingChild1}
            alt=""
            src="/group-656@2x.png"
          />
          <div className={styles.screenshot20220204At809Parent}>
            <img
              className={styles.screenshot20220204At809}
              alt=""
              src="/screenshot-20220204-at-809-1@2x.png"
            />
            <div className={styles.groupChild12} />
          </div>
          <div className={styles.popupPlugin1}>
            <div className={styles.artboardCopy35}>
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle.svg"
              />
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
              <div className={styles.group}>
                <div className={styles.pluginprojectWeb}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle1.svg"
                  />
                  <div className={styles.dropdownproject}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle2.svg"
                    />
                    <div className={styles.nikeLandingP}>Nike Landing P…</div>
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group1.svg"
                    />
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group3.svg"
                    />
                  </div>
                  <div className={styles.dropdownplatform}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle3.svg"
                    />
                    <div className={styles.web}>Web</div>
                    <img
                      className={styles.groupIcon4}
                      alt=""
                      src="/group4.svg"
                    />
                    <img
                      className={styles.groupIcon5}
                      alt=""
                      src="/group5.svg"
                    />
                  </div>
                  <img className={styles.groupIcon6} alt="" src="/group6.svg" />
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  <img className={styles.groupIcon7} alt="" src="/group7.svg" />
                  <img className={styles.lineIcon} alt="" src="/line.svg" />
                </div>
              </div>
              <div className={styles.group2}>
                <div className={styles.pluginprojectWeb}>
                  <div className={styles.group3}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle4.svg"
                    />
                    <img className={styles.lineIcon1} alt="" src="/line1.svg" />
                    <div className={styles.tagLayers}>Tag Layers</div>
                    <div className={styles.selectALayer}>
                      Select a layer on your figma file and tag it
                    </div>
                    <img
                      className={styles.icontabUp}
                      alt=""
                      src="/icontabup.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.group4}>
                <div className={styles.pluginprojectWeb}>
                  <div className={styles.group3}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle5.svg"
                    />
                    <img className={styles.lineIcon2} alt="" src="/line1.svg" />
                    <div
                      className={styles.defineBehaviour}
                    >{`Define Behaviour & Responsiveness`}</div>
                    <div
                      className={styles.editYourLayers}
                    >{`Edit your layer's styling & behaviour on all screen sizes`}</div>
                    <img
                      className={styles.groupIcon8}
                      alt=""
                      src="/group8.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className={styles.rectangleCopyIcon}
                alt=""
                src="/rectanglecopy.svg"
              />
              <div className={styles.group5}>
                <div className={styles.pluginprojectWeb}>
                  <img
                    className={styles.rectangleIcon6}
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className={styles.group3Copy2}>
                    <div className={styles.popUp}>Pop-up</div>
                    <div className={styles.fieldtextInput}>
                      <img
                        className={styles.rectangleCopyIcon1}
                        alt=""
                        src="/rectanglecopy1.svg"
                      />
                      <div className={styles.choosePopUp}>Choose pop-up</div>
                      <div className={styles.text} />
                      <img
                        className={styles.groupIcon9}
                        alt=""
                        src="/group9.svg"
                      />
                    </div>
                    <div className={styles.fieldtextInputCopy2}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectanglecopy2.svg"
                      />
                      <img
                        className={styles.rectangleIcon7}
                        alt=""
                        src="/rectangle7.svg"
                      />
                      <div className={styles.fieldtextInputCopy2Child}>
                        Group 16
                      </div>
                      <img
                        className={styles.folderIcon}
                        alt=""
                        src="/folder.svg"
                      />
                      <div className={styles.rectangle}>Rectangle</div>
                      <img
                        className={styles.rectangleCopy7Icon}
                        alt=""
                        src="/rectanglecopy7.svg"
                      />
                      <img
                        className={styles.iconblockcanvass}
                        alt=""
                        src="/iconblockcanvass.svg"
                      />
                      <div className={styles.fieldtextInputCopy2Item}>
                        Artboard 1
                      </div>
                      <div className={styles.locate}>{`Locate `}</div>
                      <img
                        className={styles.shapeIcon1}
                        alt=""
                        src="/shape1.svg"
                      />
                      <img
                        className={styles.bitmapIcon}
                        alt=""
                        src="/bitmap@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.group12Copy}>
                    <div className={styles.action}>Action</div>
                    <div className={styles.group11}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle8.svg"
                      />
                      <img
                        className={styles.group6Icon}
                        alt=""
                        src="/group61.svg"
                      />
                      <img
                        className={styles.icontick}
                        alt=""
                        src="/icontick.svg"
                      />
                      <div className={styles.change}>Change</div>
                      <div className={styles.openPopUp}>Open pop-up</div>
                      <div className={styles.cancel}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.group41}>
                    <div className={styles.editYourAction}>
                      Edit your Action properties
                    </div>
                  </div>
                  <div className={styles.group3Copy}>
                    <div className={styles.trigger}>Trigger</div>
                    <div className={styles.fieldtextInput1}>
                      <img
                        className={styles.rectangleCopyIcon1}
                        alt=""
                        src="/rectanglecopy1.svg"
                      />
                      <div className={styles.text1} />
                      <div className={styles.onClick}>On click</div>
                      <img
                        className={styles.groupIcon9}
                        alt=""
                        src="/group10.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.group7}>
                <div className={styles.pluginprojectWeb}>
                  <div className={styles.group3}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle5.svg"
                    />
                    <img className={styles.lineIcon2} alt="" src="/line1.svg" />
                    <div className={styles.addActions}>Add Actions</div>
                    <div className={styles.addTriggersAnd}>
                      Add triggers and actions to your layer
                    </div>
                    <img
                      className={styles.groupIcon8}
                      alt=""
                      src="/icontabup1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.group8}>
                <div className={styles.pluginprojectWeb}>
                  <div className={styles.group3}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle5.svg"
                    />
                    <img className={styles.lineIcon2} alt="" src="/line1.svg" />
                    <div
                      className={styles.dragDrop}
                    >{`Drag & Drop Prebuilt Components`}</div>
                    <div className={styles.addPreBuiltComponents}>
                      Add pre-built components to your figma file
                    </div>
                    <img
                      className={styles.groupIcon8}
                      alt=""
                      src="/icontabup2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.group9}>
                <div className={styles.pluginprojectWeb}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle4.svg"
                  />
                  <img className={styles.lineIcon1} alt="" src="/line1.svg" />
                  <div className={styles.group12}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle9.svg"
                    />
                    <div className={styles.group34}>
                      <div className={styles.syncToProject}>
                        Sync to Project
                      </div>
                      <img
                        className={styles.groupIcon11}
                        alt=""
                        src="/group11.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.group21}>
                    <img
                      className={styles.rectangleCopyIcon4}
                      alt=""
                      src="/rectanglecopy3.svg"
                    />
                    <img
                      className={styles.triangleIcon}
                      alt=""
                      src="/triangle.svg"
                    />
                    <div className={styles.preview}>Preview</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.rectangleCopy4Icon}
                alt=""
                src="/rectanglecopy4.svg"
              />
            </div>
            <div className={styles.taggingFlowCustom}>
              <div className={styles.pluginprojectWeb}>
                <div className={styles.pluginprojectWeb}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle10.svg"
                  />
                  <div className={styles.group61}>
                    <div className={styles.pluginprojectWeb}>
                      <div className={styles.cancel1}>CANCEL</div>
                      <div className={styles.group71}>
                        <img
                          className={styles.rectangleIcon}
                          alt=""
                          src="/rectangle11.svg"
                        />
                        <div className={styles.yesProceed}>YES, PROCEED</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.rectangleIcon15}
                    alt=""
                    src="/rectangle12.svg"
                  />
                  <div className={styles.youAreIn}>You are in Link Mode</div>
                  <div
                    className={styles.youHaveSelected}
                  >{`You have selected: `}</div>
                  <div
                    className={styles.isThisThe}
                  >{`Is this the correct dropdown? If ready, please proceed… `}</div>
                  <div className={styles.group4Copy}>
                    <div className={styles.pluginprojectWeb}>
                      <div className={styles.airportDropdown}>
                        Airport Dropdown
                      </div>
                      <img
                        className={styles.folderIcon1}
                        alt=""
                        src="/folder1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <img className={styles.image6Icon1} alt="" src="/image-61@2x.png" />
            <div className={styles.groupChild13} />
            <div className={styles.homePage}>Home Page</div>
            <div className={styles.fullBookingScreen}>Full Booking Screen</div>
            <div className={styles.airportDropdown1}>Airport Dropdown</div>
            <div className={styles.groupChild14} />
            <img className={styles.groupChild15} alt="" src="/vector-3.svg" />
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.child} />
          <b className={styles.b2}>1</b>
        </div>
        <div className={styles.instructionsChild} />
        <div className={styles.instructionsItem} />
        <b className={styles.gettingStartedWith}>Getting Started with Locofy</b>
        <div className={styles.toGetStartedContainer}>
          <span>{`To get started, here is a quick guide to using the plugin. This is our responsive `}</span>
          <b>Fickle Flight Website</b>
          <span> Sample project.</span>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild16} />
              <div className={styles.tagging}>Tagging</div>
              <b className={styles.b12}>3</b>
              <b className={styles.layers}>Layers</b>
            </div>
            <div className={styles.weveAlreadyPreTagged}>
              (We’ve already pre-tagged 12 other layers for you)
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild16} />
              <div className={styles.editing}>Editing</div>
              <b className={styles.b12}>1</b>
              <b className={styles.layers}>property</b>
            </div>
            <div className={styles.weveAlreadyPreTagged}>
              <p className={styles.defining}>{`In the Styling & `}</p>
              <p className={styles.defining}>Layouts tab</p>
            </div>
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild16} />
              <div className={styles.adding}>Adding</div>
              <b className={styles.b12}>1</b>
              <b className={styles.layers}>Action</b>
            </div>
            <div className={styles.inTheActions}>In the Actions tab</div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild16} />
              <b className={styles.gettingLivePreviewContainer}>
                <p className={styles.defining}>Getting</p>
                <p className={styles.livePreview}>Live preview</p>
              </b>
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild16} />
              <b className={styles.exportingCode}>
                <span>Exporting</span>
                <span className={styles.code}> code</span>
              </b>
            </div>
          </div>
        </div>
        <div className={styles.inThisGuided}>
          In this guided sample project, you will be:
        </div>
        <div className={styles.totalTime10To15MinutesParent}>
          <div className={styles.totalTime10}>Total time: 10 to 15 minutes</div>
          <img className={styles.groupChild21} alt="" src="/group-767.svg" />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild22} />
          <img
            className={styles.locofyLogo1}
            alt=""
            src="/locofy-logo-1@2x.png"
          />
          <img className={styles.group9Icon} alt="" src="/group91.svg" />
          <img className={styles.group9Icon1} alt="" src="/group92.svg" />
          <div className={styles.importReactFromReactImpWrapper}>
            <div className={styles.importReactFromContainer}>
              <span className={styles.importReactFromContainer1}>
                <p className={styles.defining}>
                  <span className={styles.import}>import</span>
                  <span>{` React `}</span>
                  <span className={styles.import}>from</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.react}>"react"</span>
                  <span className={styles.span}>;</span>
                </p>
                <p className={styles.defining}>
                  <span className={styles.import}>import</span>
                  <span>{` { AppHeader } `}</span>
                  <span className={styles.import}>from</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.react}>"./app-header"</span>
                </p>
                <p className={styles.defining}>
                  <span className={styles.import}>import</span>
                  <span>{` { Footer } `}</span>
                  <span className={styles.import}>from</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.react}>"./footer"</span>
                </p>
                <p className={styles.importHomeUicss}>
                  <span className={styles.import}>import</span>
                  <span className={styles.span}> '</span>
                  <span>./home-ui.css</span>
                  <span className={styles.span}>'</span>
                </p>
                <p className={styles.defining}>&nbsp;</p>
                <p className={styles.defining}>
                  <span className={styles.span}>{`type `}</span>
                  <span className={styles.homeuiprops}>HomeUIProps</span>
                  <span>{` = {`}</span>
                </p>
                <p className={styles.defining}>
                  <span>{`   header: `}</span>
                  <span className={styles.homeuiprops}>HeaderProps</span>
                  <span className={styles.span}>;</span>
                </p>
                <p className={styles.defining}>{`};`}</p>
                <p className={styles.defining}>&nbsp;</p>
                <p className={styles.exportConstHomeuiReactfun}>
                  <span className={styles.import}>export</span>
                  <span className={styles.span}>{` const `}</span>
                  <span className={styles.homeuiprops}>HomeUI</span>
                  <span className={styles.span}>{`: `}</span>
                  <span>React.FunctionComponent</span>
                  <span className={styles.span}>{`<`}</span>
                  <span className={styles.homeuiprops}>HomeUIProps</span>
                  <span className={styles.span}>{`> = React.memo(`}</span>
                </p>
                <p className={styles.header}>{`   ({ header }) => {`}</p>
                <p className={styles.header}> return (</p>
                <p className={styles.header}>
                  <span>{`        <div class=`}</span>
                  <span className={styles.react}>{`"home-ui-root">`}</span>
                </p>
              </span>
            </div>
          </div>
          <img
            className={styles.pluginMockupIcon}
            alt=""
            src="/pluginmockup.svg"
          />
          <div className={styles.groupWrapper1}>
            <div className={styles.groupParent3}>
              <div className={styles.getLocofyPluginParent}>
                <a
                  className={styles.getLocofyPlugin}
                  href="https://www.figma.com/community/plugin/1056467900248561542/Locofy---Figma-to-React-code-(BETA)"
                  target="_blank"
                >
                  Get Locofy plugin
                </a>
                <img
                  className={styles.iconPlugin}
                  alt=""
                  src="/icon--plugin.svg"
                />
              </div>
              <div className={styles.watchDemoParent}>
                <a
                  className={styles.getLocofyPlugin}
                  href="https://www.youtube.com/watch?v=XF-3ncTbacw"
                  target="_blank"
                >
                  Watch demo
                </a>
                <img className={styles.videoIcon} alt="" src="/video3.svg" />
              </div>
              <div className={styles.guidesParent}>
                <a
                  className={styles.guides}
                  href="https://guide.locofy.ai/"
                  target="_blank"
                >
                  Guides
                </a>
                <img className={styles.books1Icon} alt="" src="/books-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.shipProducts2xContainer}>
            <span>{`Ship products 2X faster - Convert `}</span>
            <b>Figma designs</b>
            <span>{` to `}</span>
            <b>React code</b>
            <span>!</span>
          </div>
          <b className={styles.turnYourDesigns}>
            Turn your designs into production-ready frontend code
          </b>
        </div>
        <img className={styles.guideGuyIcon} alt="" src="/guide-guy.svg" />
        <div className={styles.gettingStartedAddActions}>
          <div className={styles.youCanAlso}>
            You can also add an action to your layer. Let’s try opening a video
            pop-up when the play icon is clicked.
          </div>
          <div className={styles.selectTheSmallPlayIconInParent}>
            <div className={styles.selectTheSmall}>
              Select the small play icon in the top right of the first card
            </div>
            <div className={styles.selectTheLayerParent}>
              <b className={styles.selectTheLayer}>Select the LAYER</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b}>1</b>
              </div>
            </div>
          </div>
          <div className={styles.addingActionsParent}>
            <div className={styles.addingActions}>Adding Actions</div>
            <div className={styles.gettingStarted}>Getting Started</div>
          </div>
          <div className={styles.tagItAsAButtonAndGoToParent}>
            <div className={styles.selectTheSmall}>
              Tag it as a button, and go to the “Actions” tab. Select “Open
              pop-up”
            </div>
            <div className={styles.addOnclickActionParent}>
              <b className={styles.selectTheLayer}>Add Onclick Action</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b}>2</b>
              </div>
            </div>
          </div>
          <div className={styles.group51}>
            <div className={styles.pluginprojectWeb}>
              <img
                className={styles.rectangleIcon16}
                alt=""
                src="/rectangle13.svg"
              />
              <div className={styles.group35}>
                <div className={styles.group16}>
                  <div className={styles.actionsnormalCopy21}>
                    <img
                      className={styles.rectangleIcon17}
                      alt=""
                      src="/rectangle14.svg"
                    />
                    <div className={styles.scrollIntoView}>
                      Scroll into view
                    </div>
                    <img
                      className={styles.actionscrollIntoViewIcon}
                      alt=""
                      src="/actionscrollintoview.svg"
                    />
                  </div>
                  <div className={styles.actionsnormalCopy25}>
                    <img
                      className={styles.rectangleIcon17}
                      alt=""
                      src="/rectangle14.svg"
                    />
                    <div className={styles.closePopUp}>
                      <p className={styles.defining}>Close</p>
                      <p className={styles.defining}>pop-up</p>
                    </div>
                    <img
                      className={styles.actionscrollIntoViewIcon1}
                      alt=""
                      src="/actionscrollintoview1.svg"
                    />
                  </div>
                  <div className={styles.actionsnormalCopy22}>
                    <img
                      className={styles.rectangleIcon17}
                      alt=""
                      src="/rectangle14.svg"
                    />
                    <div className={styles.changePage}>Change page</div>
                    <img
                      className={styles.actionscrollIntoViewIcon2}
                      alt=""
                      src="/actionscrollintoview2.svg"
                    />
                  </div>
                  <div className={styles.actionsnormalCopy23}>
                    <img
                      className={styles.rectangleIcon17}
                      alt=""
                      src="/rectangle14.svg"
                    />
                    <div className={styles.openUrlExternal}>
                      Open URL (External)
                    </div>
                    <img
                      className={styles.actionscrollIntoViewIcon3}
                      alt=""
                      src="/actionscrollintoview3.svg"
                    />
                  </div>
                  <div className={styles.actionsnormalCopy24}>
                    <img
                      className={styles.rectangleIcon17}
                      alt=""
                      src="/rectangle14.svg"
                    />
                    <div className={styles.openPopUp1}>Open pop-up</div>
                    <img
                      className={styles.actionscrollIntoViewIcon4}
                      alt=""
                      src="/actionscrollintoview4.svg"
                    />
                  </div>
                </div>
                <div className={styles.chooseAction}>Choose Action</div>
              </div>
            </div>
            <div className={styles.group5Child} />
          </div>
          <div className={styles.chooseTheMatterhorn}>
            Choose the “Matterhorn Popup” for this icon.
          </div>
          <div className={styles.youWillNeedToLinkThePopParent}>
            <div className={styles.selectTheSmall}>
              You will need to link the pop-up that is in a different frame. You
              can choose from the dropdown, or use “Locate” to choose the right
              pop-up
            </div>
            <div className={styles.editBasicAndAdvancedAttribParent}>
              <b className={styles.editBasicAnd}>Link your pop-up</b>
              <div className={styles.ellipseParent3}>
                <div className={styles.groupChild4} />
                <b className={styles.b7}>3</b>
              </div>
            </div>
          </div>
          <div className={styles.perfectAreYou}>
            Perfect! Are you ready to see your design come to life? Head over to
            the next step!
          </div>
          <div className={styles.screenshot20220204At827Parent}>
            <img
              className={styles.screenshot20220204At827}
              alt=""
              src="/screenshot-20220204-at-827-1@2x.png"
            />
            <div className={styles.rectangleParent5}>
              <div className={styles.groupChild26} />
              <div className={styles.groupChild27} />
              <div className={styles.groupChild28} />
              <div className={styles.groupChild29} />
              <div className={styles.groupChild30} />
            </div>
          </div>
          <img
            className={styles.screenshot20220204At831}
            alt=""
            src="/screenshot-20220204-at-831-1@2x.png"
          />
          <div className={styles.gettingStartedAddActionsChild} />
        </div>
        <div className={styles.div3}>
          <div className={styles.child} />
          <b className={styles.b2}>3</b>
        </div>
        <div className={styles.gettingStartedPreview}>
          <div className={styles.selectALayerContainer}>
            <span>{`Select a layer or a frame, and click the `}</span>
            <b>Preview</b>
            <span> button to see an interactive preview of your project.</span>
          </div>
          <div className={styles.youCanNowSeeHowYourProjeParent}>
            <div className={styles.youCanNow}>
              You can now see how your project behaves in different screen
              sizes. You also have the option to view your project on popular
              devices.
            </div>
            <div className={styles.viewProjectInDifferentScreParent}>
              <b className={styles.selectTheLayer}>
                View Project in different screen sizes
              </b>
              <img className={styles.groupChild31} alt="" src="/group-2.svg" />
            </div>
            <div className={styles.previewParent}>
              <div className={styles.preview1}>
                <div className={styles.pluginprojectWeb}>
                  <div className={styles.pluginprojectWeb}>
                    <img
                      className={styles.rectangleIcon22}
                      alt=""
                      src="/rectangle15.svg"
                    />
                    <div className={styles.responsive}>Responsive</div>
                    <div className={styles.group39}>
                      <div className={styles.motoG4}>Moto G4</div>
                      <div className={styles.galaxyS5}>Galaxy S5</div>
                      <div className={styles.pixel2}>Pixel 2</div>
                      <div className={styles.pixel2Xl}>Pixel 2 XL</div>
                      <div className={styles.iphone5se}>iPhone 5/SE</div>
                      <div className={styles.iphone678}>iPhone 6/7/8</div>
                      <div className={styles.iphone678Plus}>
                        iPhone 6/7/8 Plus
                      </div>
                      <div className={styles.iphoneX}>iPhone X</div>
                      <div className={styles.ipad}>iPad</div>
                      <div className={styles.ipadPro}>iPad Pro</div>
                      <div className={styles.surfaceDuo}>Surface Duo</div>
                      <div className={styles.galaxyFold}>Galaxy Fold</div>
                    </div>
                    <img className={styles.line2Icon} alt="" src="/line2.svg" />
                    <img
                      className={styles.groupIcon12}
                      alt=""
                      src="/group12.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.group37}>
                <img
                  className={styles.rectangleIcon23}
                  alt=""
                  src="/rectangle16.svg"
                />
                <img
                  className={styles.rectangleIcon24}
                  alt=""
                  src="/rectangle17.svg"
                />
                <img className={styles.group30Icon} alt="" src="/group30.svg" />
                <div className={styles.group341}>
                  <div className={styles.group38}>
                    <div className={styles.responsive1}>Responsive</div>
                    <img
                      className={styles.groupIcon13}
                      alt=""
                      src="/group13.svg"
                    />
                  </div>
                  <div className={styles.group72}>
                    <img
                      className={styles.screenscustomIcon}
                      alt=""
                      src="/screenscustom.svg"
                    />
                    <img className={styles.ovalIcon} alt="" src="/oval.svg" />
                    <div className={styles.more}>More</div>
                  </div>
                  <div className={styles.group36}>
                    <img
                      className={styles.screens1200Icon}
                      alt=""
                      src="/screens1200.svg"
                    />
                    <div className={styles.default}>Default</div>
                  </div>
                  <div className={styles.group62}>
                    <img
                      className={styles.screens991Icon}
                      alt=""
                      src="/screens991.svg"
                    />
                    <div className={styles.div4}>1200</div>
                  </div>
                  <div className={styles.group52}>
                    <img
                      className={styles.screens767Icon}
                      alt=""
                      src="/screens767.svg"
                    />
                    <div className={styles.div5}>991</div>
                  </div>
                  <div className={styles.group42}>
                    <img
                      className={styles.groupIcon14}
                      alt=""
                      src="/group14.svg"
                    />
                    <div className={styles.div6}>479</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.youCanAlsoCheckOutTheIntParent}>
            <div className={styles.youCanAlsoContainer}>
              <p className={styles.defining}>
                You can also check out the interactions you have set, since the
                preview is running on live code!
              </p>
              <p className={styles.defining}>&nbsp;</p>
              <p className={styles.defining}>
                For this project, we’ve helped you to pre-tag other layers, so
                click around to try them out!
              </p>
            </div>
            <div className={styles.testOutTheInteractionsParent}>
              <b className={styles.selectTheLayer}>TEST OUT THE INTERACTIONS</b>
              <img className={styles.groupChild31} alt="" src="/group-2.svg" />
            </div>
            <img
              className={styles.screenshot20220204At834}
              alt=""
              src="/screenshot-20220204-at-834-1@2x.png"
            />
          </div>
          <div className={styles.previewYourProjectParent}>
            <div className={styles.previewYourProject}>
              Preview your project
            </div>
            <div className={styles.gettingStarted3}>Getting Started</div>
          </div>
          <div className={styles.gettingStartedPreviewChild} />
          <div className={styles.groupParent4}>
            <div className={styles.duringPreviewYourProjectWWrapper}>
              <div className={styles.duringPreviewYour}>
                During preview, your project will be shown depending on how you
                tagged the layers, tweaked the behaviour and added actions.
                Untagged or untouched layers might not show properly on certain
                screen sizes.
              </div>
            </div>
            <img className={styles.groupChild33} alt="" src="/line-1.svg" />
            <img className={styles.groupChild34} alt="" src="/group-25.svg" />
          </div>
        </div>
        <div className={styles.ellipseParent10}>
          <div className={styles.child} />
          <b className={styles.b2}>4</b>
        </div>
        <div className={styles.gettingStartedSyncToStud}>
          <div className={styles.onceYouAre}>
            Once you are happy with your preview, you are now ready to sync to
            Locofy Builder where you can view and export your code.
          </div>
          <div className={styles.groupParent5}>
            <div className={styles.onThisFigmaFileSelectTheParent}>
              <div className={styles.onThisFigma}>
                On this Figma file, select the frames you wish to sync and click
                the “View code” button.
              </div>
              <div className={styles.selectTheFramesParent}>
                <b className={styles.selectTheFrames}>Select the frames</b>
                <div className={styles.ellipseParent11}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>1</b>
                </div>
              </div>
            </div>
            <div className={styles.groupParent6}>
              <div className={styles.rectangleParent6}>
                <div className={styles.groupChild37} />
                <div className={styles.groupChild38} />
                <div className={styles.groupChild39} />
                <div className={styles.groupChild40} />
                <div className={styles.homePage1}>Home Page</div>
                <div className={styles.resultsPage}>Results Page</div>
                <div className={styles.popup}>Popup</div>
                <div className={styles.hotelsPage}>Hotels Page</div>
              </div>
              <img
                className={styles.screenshot20220302At735}
                alt=""
                src="/screenshot-20220302-at-735-1@2x.png"
              />
              <div className={styles.groupChild41} />
            </div>
          </div>
          <div className={styles.syncToLocofyBuilderParent}>
            <div className={styles.syncToLocofyContainer}>
              <p className={styles.defining}>{`Sync to `}</p>
              <p className={styles.defining}>Locofy Builder</p>
            </div>
            <div className={styles.gettingStarted}>Getting Started</div>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.chooseAStartingFrameAndChParent}>
              <div className={styles.chooseAStarting}>
                Choose a Starting Frame and change your Framework settings. Then
                hit “Sync to Builder”.
              </div>
              <div className={styles.syncToLocofyBuilderGroup}>
                <b className={styles.selectTheFrames}>Sync to LOCOFY builder</b>
                <div className={styles.ellipseParent11}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>2</b>
                </div>
              </div>
            </div>
            <div className={styles.groupChild43} />
            <div className={styles.screenshot20220302At536Parent}>
              <img
                className={styles.screenshot20220302At536}
                alt=""
                src="/screenshot-20220302-at-536-1@2x.png"
              />
              <div className={styles.groupChild44} />
              <div className={styles.groupChild45} />
              <div className={styles.groupChild46} />
              <div className={styles.groupChild47} />
              <div className={styles.framesSelected}>3 frames selected</div>
            </div>
          </div>
        </div>
        <div className={styles.gettingStartedSyncToStud1}>
          <div className={styles.onceTheSync}>
            Once the sync is complete, you’ll be taken to the Locofy Builder.
          </div>
          <div className={styles.viewAndExportCodeOnLocofyParent}>
            <div className={styles.syncToLocofyContainer}>
              <p className={styles.defining}>{`View and `}</p>
              <p className={styles.defining}>{`Export code on `}</p>
              <p className={styles.defining}>Locofy Builder</p>
            </div>
            <div className={styles.gettingStarted}>Getting Started</div>
          </div>
          <div className={styles.onceYourProjectHasBeenSynParent}>
            <div className={styles.chooseAStarting}>
              Once your project has been synced, you can now view the code in
              the builder and make further changes.
            </div>
            <div className={styles.viewCodeAndMakeChangesParent}>
              <b className={styles.selectTheFrames}>
                View code and make changes
              </b>
              <div className={styles.ellipseParent11}>
                <div className={styles.groupChild} />
                <b className={styles.b}>1</b>
              </div>
            </div>
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
          </div>
          <div className={styles.groupParent8}>
            <img className={styles.groupChild49} alt="" src="/group-776.svg" />
            <div className={styles.inTheBuilder}>
              In the Builder, you can make and reuse components. You can also
              add props for dynamic content.
            </div>
            <div className={styles.makeComponentsParent}>
              <b className={styles.selectTheFrames}>Make components</b>
              <div className={styles.ellipseParent11}>
                <div className={styles.groupChild} />
                <b className={styles.b}>2</b>
              </div>
            </div>
          </div>
          <div className={styles.groupParent9}>
            <div className={styles.switchToPreviewModeToViewParent}>
              <div className={styles.switchToPreview}>
                Switch to preview mode to view a live prototype running on code
              </div>
              <div className={styles.ellipseParent15}>
                <div className={styles.groupChild51} />
                <img
                  className={styles.image18Icon}
                  alt=""
                  src="/image-18@2x.png"
                />
                <div className={styles.homepage}>
                  <div className={styles.heroSection}>
                    <header className={styles.topHeader}>
                      <div className={styles.topContainer}>
                        <img
                          className={styles.fickleflightLogoIcon}
                          alt=""
                          src="/fickleflight-logo.svg"
                        />
                        <div className={styles.navigationRight}>
                          <div className={styles.navigationMenu}>
                            <div className={styles.explore}>Explore</div>
                            <div className={styles.search}>Search</div>
                            <div className={styles.hotels}>Hotels</div>
                            <div className={styles.offers}>Offers</div>
                          </div>
                          <div className={styles.accountSection}>
                            <img
                              className={styles.hamburgerMenuIcon}
                              alt=""
                              src="/notification2.svg"
                            />
                            <img
                              className={styles.notificationBellIcon}
                              alt=""
                              src="/notification3.svg"
                            />
                            <img
                              className={styles.unsplashd1upkifd04aIcon}
                              alt=""
                              src="/top_avatar1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className={styles.searchSection}>
                      <div className={styles.bannerGradient} />
                      <img
                        className={styles.bannerBackground}
                        alt=""
                        src="/banner--background1@2x.png"
                      />
                      <div className={styles.searchContainer}>
                        <div className={styles.title}>
                          <div
                            className={styles.letsExplore}
                          >{`Let’s explore & travel the world`}</div>
                          <div className={styles.findTheBest}>
                            Find the best destinations and the most popular
                            stays!
                          </div>
                        </div>
                        <div className={styles.searchForm}>
                          <div className={styles.inputsRow}>
                            <div className={styles.inputGroup}>
                              <Autocomplete
                                className={styles.departureField}
                                size="medium"
                                disablePortal
                                options={[
                                  "Singapore (SIN)",
                                  "Sydney (SYD)",
                                  "Siem Reap (REP)",
                                  "Shanghai (PVG)Sanya (SYX)",
                                ]}
                                renderInput={(params: any) => (
                                  <TextField
                                    {...params}
                                    color="primary"
                                    label="Departure"
                                    variant="outlined"
                                    placeholder=""
                                    helperText=""
                                  />
                                )}
                                defaultValue="Singapore -  Changi (SIN)"
                              />
                            </div>
                            <div className={styles.inputGroup}>
                              <div className={styles.arrivalField}>
                                <div className={styles.input}>
                                  <div className={styles.labelContainer}>
                                    <div className={styles.arrival}>
                                      Arrival
                                    </div>
                                  </div>
                                  <div className={styles.active}>
                                    <div className={styles.muiautocompletetag}>
                                      <div className={styles.chip}>
                                        <div className={styles.container}>
                                          <div className={styles.avatar}>
                                            <div className={styles.op}>F</div>
                                          </div>
                                          <div className={styles.typography}>
                                            <div className={styles.chip1}>
                                              Chip
                                            </div>
                                          </div>
                                          <img
                                            className={
                                              styles.notificationBellIcon
                                            }
                                            alt=""
                                            src="/cancel.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.chip}>
                                        <div className={styles.container}>
                                          <div className={styles.avatar}>
                                            <div className={styles.op}>F</div>
                                          </div>
                                          <div className={styles.typography}>
                                            <div className={styles.chip1}>
                                              Chip
                                            </div>
                                          </div>
                                          <img
                                            className={
                                              styles.notificationBellIcon
                                            }
                                            alt=""
                                            src="/cancel.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.losAngelesLa}>
                                      Los Angeles (LA)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.inputGroup}>
                              <div className={styles.departureField}>
                                <DatePicker
                                  label="Date"
                                  value={dateFieldDateTimePickerValue}
                                  onChange={(newValue: any) => {
                                    setDateFieldDateTimePickerValue(newValue);
                                  }}
                                  sx={{}}
                                  slotProps={{
                                    textField: {
                                      variant: "outlined",
                                      size: "medium",
                                      fullWidth: true,
                                      required: false,
                                      autoFocus: false,
                                      error: false,
                                      color: "primary",
                                      placeholder: "Date",
                                    },
                                    openPickerIcon: {
                                      component: () => <></>,
                                    },
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.buttonGroup}>
                            <div className={styles.searchFlightsButton}>
                              <div className={styles.button}>
                                Search flights
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.homeContents}>
                    <div className={styles.upcomingFlightSection}>
                      <b className={styles.upcomingFlight}>Upcoming Flight</b>
                      <div className={styles.flightDetails}>
                        <div className={styles.flightMainContainer}>
                          <div className={styles.toAndFrom}>
                            <div className={styles.fromDetails}>
                              <b className={styles.sin}>SIN</b>
                              <div className={styles.singapore}>Singapore</div>
                            </div>
                            <div className={styles.duration}>
                              <b className={styles.h55m}>15H 55M</b>
                              <img
                                className={styles.durationChild}
                                alt=""
                                src="/group-17.svg"
                              />
                            </div>
                            <div className={styles.toDetails}>
                              <b className={styles.lax}>LAX</b>
                              <div className={styles.losAngeles}>
                                Los Angeles
                              </div>
                            </div>
                          </div>
                          <div className={styles.horizontalLine} />
                          <div className={styles.departureDetails}>
                            <div className={styles.departsOn1}>
                              Departs on: 1 May, 08:00 AM
                            </div>
                            <div className={styles.daysToGoContainer}>
                              <b>4 days</b>
                              <span> to go</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.lineSeparator} />
                        <div className={styles.prepareMenu}>
                          <div className={styles.prepareForYour}>
                            Prepare for your trip
                          </div>
                          <div className={styles.tripMenus}>
                            <button className={styles.hotel}>
                              <img
                                className={styles.hotelChild}
                                alt=""
                                src="/group-21.svg"
                              />
                              <div className={styles.hotel1}>Hotel</div>
                            </button>
                            <button className={styles.hotel}>
                              <div className={styles.hotelChild}>
                                <div className={styles.groupChild52} />
                                <img
                                  className={styles.groupIcon15}
                                  alt=""
                                  src="/group15.svg"
                                />
                              </div>
                              <div className={styles.attractions1}>
                                Attractions
                              </div>
                            </button>
                            <button className={styles.hotel}>
                              <img
                                className={styles.hotelChild}
                                alt=""
                                src="/group-211.svg"
                              />
                              <div className={styles.eats1}>Eats</div>
                            </button>
                            <button className={styles.hotel}>
                              <div className={styles.hotelChild}>
                                <div className={styles.groupChild53} />
                                <img
                                  className={styles.vectorIcon1}
                                  alt=""
                                  src="/vector5.svg"
                                />
                              </div>
                              <div className={styles.commute1}>Commute</div>
                            </button>
                            <button className={styles.hotel}>
                              <div className={styles.rectangleParent9}>
                                <div className={styles.groupChild54} />
                                <img
                                  className={styles.vectorIcon2}
                                  alt=""
                                  src="/vector6.svg"
                                />
                              </div>
                              <div className={styles.taxi1}>Taxi</div>
                            </button>
                            <button className={styles.hotel}>
                              <div className={styles.hotelChild}>
                                <div className={styles.groupChild55} />
                                <img
                                  className={styles.vectorIcon3}
                                  alt=""
                                  src="/vector7.svg"
                                />
                              </div>
                              <div className={styles.movies1}>Movies</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.popDestinationsMain}>
                      <div className={styles.destinationsTitles}>
                        <div className={styles.titleContainer}>
                          <b className={styles.planYourNext}>
                            Plan your next trip
                          </b>
                          <b className={styles.mostPopularDestinations}>
                            Most Popular Destinations
                          </b>
                        </div>
                        <a className={styles.viewAllTop}>
                          <div className={styles.viewAllDestinations}>
                            View all destinations
                          </div>
                          <img
                            className={styles.notificationBellIcon}
                            alt=""
                            src="/arrowright3.svg"
                          />
                        </a>
                      </div>
                      <div className={styles.cardsContainer}>
                        <button className={styles.card1}>
                          <div className={styles.unsplashnnzkznywhauParent}>
                            <img
                              className={styles.unsplashnnzkznywhauIcon}
                              alt=""
                              src="/unsplashnnzkznywhau@2x.png"
                            />
                            <div className={styles.destinationDetails}>
                              <b className={styles.paris}>Paris</b>
                              <div className={styles.parent}>
                                <div className={styles.div7}>$699</div>
                                <div className={styles.from3}>from</div>
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.card1}>
                          <div className={styles.unsplashnnzkznywhauParent}>
                            <img
                              className={styles.unsplashnnzkznywhauIcon}
                              alt=""
                              src="/unsplashyc8qqp50bda@2x.png"
                            />
                            <div className={styles.destinationDetails}>
                              <b className={styles.paris}>Greece</b>
                              <div className={styles.parent1}>
                                <div className={styles.div8}>$1079</div>
                                <div className={styles.from4}>from</div>
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.card1}>
                          <div className={styles.unsplashnnzkznywhauParent}>
                            <img
                              className={styles.unsplashnnzkznywhauIcon}
                              alt=""
                              src="/unsplashltnpejwdsay@2x.png"
                            />
                            <div className={styles.destinationDetails}>
                              <b className={styles.paris}>Norway</b>
                              <div className={styles.parent}>
                                <div className={styles.div7}>$895</div>
                                <div className={styles.from3}>from</div>
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.card1}>
                          <div className={styles.unsplashnnzkznywhauParent}>
                            <img
                              className={styles.unsplashnnzkznywhauIcon}
                              alt=""
                              src="/unsplashm0oiyn5u8zm@2x.png"
                            />
                            <div className={styles.destinationDetails}>
                              <b className={styles.paris}>Tuscany</b>
                              <div className={styles.parent3}>
                                <div className={styles.div10}>$1245</div>
                                <div className={styles.from6}>from</div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className={styles.viewAllBottom}>
                        <div className={styles.viewAllDestinations1}>
                          View all destinations
                        </div>
                        <img
                          className={styles.notificationBellIcon}
                          alt=""
                          src="/arrowright3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.recommendedHolidaysContainer}>
                      <div className={styles.recTitle}>
                        <b className={styles.recommendedHolidays}>
                          Recommended Holidays
                        </b>
                        <a className={styles.viewAllHolidaysParent}>
                          <div className={styles.viewAllHolidays}>
                            View all holidays
                          </div>
                          <img
                            className={styles.notificationBellIcon}
                            alt=""
                            src="/arrowright4.svg"
                          />
                        </a>
                      </div>
                      <div className={styles.recCardsContainer}>
                        <button className={styles.recCard1}>
                          <img
                            className={styles.unsplash5mv818tzxeoIcon}
                            alt=""
                            src="/unsplash5mv818tzxeo1@2x.png"
                          />
                          <div className={styles.holidayDetails}>
                            <div className={styles.recTitle}>
                              <div className={styles.baliParent}>
                                <div className={styles.bali}>Bali</div>
                                <div className={styles.d3n}>4D3N</div>
                              </div>
                              <div className={styles.div11}>$899</div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.recCard1}>
                          <img
                            className={styles.unsplash5mv818tzxeoIcon}
                            alt=""
                            src="/unsplashj82dskoxvy8@2x.png"
                          />
                          <div className={styles.holidayDetails}>
                            <div className={styles.recTitle}>
                              <div className={styles.baliParent}>
                                <div className={styles.bali}>Switzerland</div>
                                <div className={styles.d3n}>6D5N</div>
                              </div>
                              <div className={styles.div12}>$900</div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.recCard3}>
                          <img
                            className={styles.unsplash5mv818tzxeoIcon}
                            alt=""
                            src="/unsplash4ezkckxolre@2x.png"
                          />
                          <div className={styles.holidayDetails}>
                            <div className={styles.recTitle}>
                              <div className={styles.baliParent}>
                                <div className={styles.bali}>Boracay</div>
                                <div className={styles.d3n}>5D4N</div>
                              </div>
                              <div className={styles.div11}>$699</div>
                            </div>
                          </div>
                        </button>
                        <button className={styles.recCard4}>
                          <img
                            className={styles.unsplash5mv818tzxeoIcon}
                            alt=""
                            src="/unsplashuyqmxhjr3ne@2x.png"
                          />
                          <div className={styles.holidayDetails}>
                            <div className={styles.recTitle}>
                              <div className={styles.baliParent}>
                                <div className={styles.bali}>Palawan</div>
                                <div className={styles.d3n}>4D3N</div>
                              </div>
                              <div className={styles.div14}>$789</div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className={styles.viewAllBottom1}>
                        <div className={styles.viewAllHolidays1}>
                          View all holidays
                        </div>
                        <img
                          className={styles.notificationBellIcon}
                          alt=""
                          src="/arrowright4.svg"
                        />
                      </div>
                    </div>
                    <form className={styles.popularStays}>
                      <div className={styles.popularStaysHeader}>
                        <div className={styles.popularStaysTitle}>
                          <b className={styles.popularStays1}>Popular Stays</b>
                        </div>
                        <a className={styles.viewAllStaysParent}>
                          <div className={styles.viewAllStays}>
                            View all stays
                          </div>
                          <img
                            className={styles.notificationBellIcon}
                            alt=""
                            src="/arrowright5.svg"
                          />
                        </a>
                      </div>
                      <div className={styles.hotelCards}>
                        <div className={styles.hotelCard1}>
                          <a className={styles.hotelCard}>
                            <img
                              className={styles.unsplashhhrfsdwxxusIcon}
                              alt=""
                              src="/unsplashhhrfsdwxxus@2x.png"
                            />
                            <div className={styles.stayDetails}>
                              <div className={styles.entireBungalowParent}>
                                <div className={styles.entireBungalow}>
                                  Entire bungalow
                                </div>
                                <b className={styles.matterhornSuites}>
                                  Matterhorn Suites
                                </b>
                                <div className={styles.night}>$575/night</div>
                              </div>
                              <img
                                className={styles.videoIcon1}
                                alt=""
                                src="/video4.svg"
                              />
                            </div>
                            <div className={styles.rating}>
                              <div className={styles.reviews}>(60 reviews)</div>
                              <div className={styles.parent4}>
                                <div className={styles.div15}>4.9</div>
                                <img
                                  className={styles.vectorIcon4}
                                  alt=""
                                  src="/vector8.svg"
                                />
                              </div>
                            </div>
                            <button className={styles.moreDetailsButton}>
                              <div className={styles.button1}>More details</div>
                            </button>
                          </a>
                        </div>
                        <div className={styles.hotelCard1}>
                          <a className={styles.hotelCard}>
                            <img
                              className={styles.unsplashhhrfsdwxxusIcon}
                              alt=""
                              src="/unsplashtsn8bpopveo@2x.png"
                            />
                            <div className={styles.stayDetails1}>
                              <div className={styles.entireBungalowParent}>
                                <div className={styles.entireBungalow}>
                                  2-Story beachfront suite
                                </div>
                                <b className={styles.matterhornSuites}>
                                  Discovery Shores
                                </b>
                                <div className={styles.night}>$360/night</div>
                              </div>
                            </div>
                            <div className={styles.rating}>
                              <div className={styles.reviews}>
                                (116 reviews)
                              </div>
                              <div className={styles.parent4}>
                                <div className={styles.div15}>4.8</div>
                                <img
                                  className={styles.vectorIcon4}
                                  alt=""
                                  src="/vector8.svg"
                                />
                              </div>
                            </div>
                            <button className={styles.moreDetailsButton}>
                              <div className={styles.button1}>More details</div>
                            </button>
                          </a>
                        </div>
                        <div className={styles.hotelCard1}>
                          <a className={styles.hotelCard4}>
                            <img
                              className={styles.unsplashhhrfsdwxxusIcon}
                              alt=""
                              src="/unsplashrlwe8f8anoc@2x.png"
                            />
                            <div className={styles.stayDetails1}>
                              <div className={styles.entireBungalowParent}>
                                <div className={styles.entireBungalow}>
                                  Single deluxe hut
                                </div>
                                <b
                                  className={styles.arcticHut}
                                >{`Arctic Hut `}</b>
                                <div className={styles.night}>$420/night</div>
                              </div>
                            </div>
                            <div className={styles.rating}>
                              <div className={styles.reviews2}>
                                (78 reviews)
                              </div>
                              <div className={styles.parent4}>
                                <div className={styles.div15}>4.7</div>
                                <img
                                  className={styles.vectorIcon4}
                                  alt=""
                                  src="/vector9.svg"
                                />
                              </div>
                            </div>
                            <button className={styles.moreDetailsButton}>
                              <div className={styles.button1}>More details</div>
                            </button>
                          </a>
                        </div>
                        <div className={styles.hotelCard41}>
                          <a className={styles.hotelCard5}>
                            <img
                              className={styles.unsplashhhrfsdwxxusIcon}
                              alt=""
                              src="/unsplashyqrybvxug5q@2x.png"
                            />
                            <div className={styles.stayDetails}>
                              <div className={styles.entireBungalowParent}>
                                <div className={styles.entireBungalow}>
                                  Deluxe King Room
                                </div>
                                <b className={styles.arcticHut}>
                                  Lake Louise Inn
                                </b>
                                <div className={styles.night}>$244/night</div>
                              </div>
                              <img
                                className={styles.videoIcon1}
                                alt=""
                                src="/video4.svg"
                              />
                            </div>
                            <div className={styles.rating}>
                              <div className={styles.reviews}>(63 reviews)</div>
                              <div className={styles.parent4}>
                                <div className={styles.div15}>4.6</div>
                                <img
                                  className={styles.vectorIcon4}
                                  alt=""
                                  src="/vector8.svg"
                                />
                              </div>
                            </div>
                            <button className={styles.moreDetailsButton3}>
                              <div className={styles.button1}>More details</div>
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className={styles.viewAllStaysGroup}>
                        <div className={styles.viewAllStays1}>
                          View all stays
                        </div>
                        <img
                          className={styles.notificationBellIcon}
                          alt=""
                          src="/arrowright6.svg"
                        />
                      </div>
                    </form>
                  </div>
                  <div className={styles.footerSection}>
                    <div className={styles.rectangleParent11}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/rectangle-186@2x.png"
                      />
                      <div className={styles.shareYourTravelsForm}>
                        <div className={styles.formHeader}>
                          <b className={styles.planYourNext}>
                            subscribe to our newsletter
                          </b>
                          <b className={styles.formTitle}>Get weekly updates</b>
                        </div>
                        <div className={styles.form}>
                          <div className={styles.formText}>
                            <div className={styles.fillInYour}>
                              Fill in your details to join the party!
                            </div>
                          </div>
                          <div className={styles.formFields}>
                            <div className={styles.formText}>
                              <TextField
                                className={styles.input1}
                                color="primary"
                                label="Your name"
                                size="medium"
                                variant="outlined"
                                type="text"
                                sx={{
                                  "& .MuiInputBase-root": { height: "15px" },
                                }}
                              />
                            </div>
                            <div className={styles.formText}>
                              <TextField
                                className={styles.input1}
                                color="primary"
                                label="Email address"
                                size="medium"
                                variant="outlined"
                                type="text"
                                sx={{
                                  "& .MuiInputBase-root": { height: "15px" },
                                }}
                              />
                            </div>
                          </div>
                          <button className={styles.button5}>
                            <div className={styles.unstyledbutton}>
                              <div className={styles.button6}>submit</div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <footer className={styles.footer1}>
                      <div className={styles.fickleflightBio}>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="/logo1.svg"
                        />
                        <div className={styles.fickleFlightIs}>
                          Fickle Flight is your one-stop travel portal. We offer
                          hassle free flight and hotel bookings. We also have
                          all your flight needs in you online shop.
                        </div>
                        <img
                          className={styles.socialIcons}
                          alt=""
                          src="/social-icons1.svg"
                        />
                      </div>
                      <div className={styles.footerChild} />
                      <div className={styles.footerLinks}>
                        <div className={styles.company}>
                          <a className={styles.aboutUs}>About Us</a>
                          <div className={styles.company1}>Company</div>
                          <div className={styles.news}>News</div>
                          <div className={styles.careers}>Careers</div>
                          <div className={styles.howWeWork}>How we work</div>
                        </div>
                        <div className={styles.company}>
                          <div className={styles.account}>Account</div>
                          <div className={styles.support1}>Support</div>
                          <div className={styles.supportCenter}>
                            Support Center
                          </div>
                          <div className={styles.faq}>FAQ</div>
                          <div className={styles.accessibility}>
                            Accessibility
                          </div>
                        </div>
                        <div className={styles.more1}>
                          <div className={styles.covidAdvisory}>
                            Covid Advisory
                          </div>
                          <div className={styles.more2}>More</div>
                          <div className={styles.airlineFees}>Airline Fees</div>
                          <div className={styles.tips}>Tips</div>
                          <div className={styles.howWeWork}>
                            Quarantine Rules
                          </div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
                <img
                  className={styles.image18Icon1}
                  alt=""
                  src="/image-181@2x.png"
                />
                <img
                  className={styles.groupChild56}
                  alt=""
                  src="/vector-60.svg"
                />
                <img
                  className={styles.screenshot20220302At758}
                  alt=""
                  src="/screenshot-20220302-at-758-1@2x.png"
                />
              </div>
              <div className={styles.previewYourWorkParent}>
                <b className={styles.selectTheFrames}>Preview your work</b>
                <div className={styles.ellipseParent11}>
                  <div className={styles.groupChild} />
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.onceYouAre1}>
              Once you are satisfied with your changes, you can finalize your
              framework settings before exporting
            </div>
            <div className={styles.exportYourProjectParent}>
              <b className={styles.selectTheFrames}>Export your project</b>
              <div className={styles.ellipseParent11}>
                <div className={styles.groupChild} />
                <b className={styles.b}>4</b>
              </div>
            </div>
            <img
              className={styles.screenshot20220302At812}
              alt=""
              src="/screenshot-20220302-at-812-1@2x.png"
            />
          </div>
          <div className={styles.youreDoneAfterExportingYParent}>
            <div className={styles.youreDoneAfter}>
              You’re done! After exporting your project, you will be shown the
              next steps to run your project.
            </div>
            <div className={styles.runYourProjectParent}>
              <b className={styles.selectTheFrames}>Run your project</b>
              <div className={styles.ellipseParent11}>
                <div className={styles.groupChild} />
                <b className={styles.b}>5</b>
              </div>
            </div>
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          </div>
        </div>
        <div className={styles.ellipseParent19}>
          <div className={styles.child} />
          <b className={styles.b2}>5</b>
        </div>
        <div className={styles.ellipseParent20}>
          <div className={styles.child} />
          <b className={styles.b28}>6</b>
        </div>
        <div className={styles.tryTaggingTheSearchFlightParent}>
          <div
            className={styles.tryTaggingThe}
          >{`Try tagging the Search Flight button, Autocomplete field and Date & Time Picker`}</div>
          <img className={styles.groupChild62} alt="" src="/vector-6.svg" />
        </div>
        <img className={styles.group2Icon1} alt="" src="/group21.svg" />
        <div className={styles.useThisAs}>
          Use this as the Autocomplete Dropdown
        </div>
        <img className={styles.group2Icon2} alt="" src="/group22.svg" />
        <img className={styles.instructionsInner} alt="" src="/vector-7.svg" />
        <div className={styles.tryDefiningBehaviourRespoParent}>
          <div
            className={styles.tryDefiningBehaviour}
          >{`Try defining behaviour & responsiveness for the “Show more results” button`}</div>
          <div className={styles.makeSureYou}>
            ( Make sure you tag the button first )
          </div>
          <img className={styles.groupChild63} alt="" src="/vector-71.svg" />
        </div>
        <img className={styles.group3Icon} alt="" src="/group31.svg" />
        <div className={styles.tryAddingAnActionToThePlParent}>
          <div className={styles.tryAddingAn}>
            Try adding an action to the Play Video button in this screen
          </div>
          <img className={styles.groupChild64} alt="" src="/vector-8.svg" />
        </div>
        <img className={styles.group3Icon1} alt="" src="/group32.svg" />
        <div className={styles.chooseThisAsYourPopUpParent}>
          <div className={styles.chooseThisAs}>Choose this as your pop-up</div>
          <img className={styles.groupChild65} alt="" src="/vector-10.svg" />
          <div className={styles.makeSureYou1}>
            ( Make sure you tag this as a pop-up first )
          </div>
        </div>
        <img className={styles.group2Icon3} alt="" src="/group23.svg" />
      </div>
    </LocalizationProvider>
  );
};

export default Instructions;
