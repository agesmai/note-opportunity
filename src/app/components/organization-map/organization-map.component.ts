import {Component} from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-organization-map',
  templateUrl: './organization-map.component.html',
  styleUrls: ['./organization-map.component.css']
})
export class OrganizationMapComponent {
  selectedNodes!: TreeNode[];
  data: TreeNode[] = [
    {
      expanded: true,
      label: 'HAS',
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'assets/img/avatars/simson.jpg',
            name: 'Nguyen Viet Anh',
            title: 'Giam doc Trung tam',
            department: 'Board of Manager'
          },
          children: [

            {
              expanded: true,
              label: 'HAS HN',
              children: [
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Pham Viet Anh',
                    title: 'Truong BP',
                    department: 'Presales'
                  }
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Tran Xuan Quynh',
                    title: 'Truong phong',
                    department: 'Sales'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'Sales team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'AM',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'AM',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Tran Nam Tien',
                    title: 'Truong phong',
                    department: 'R&D'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'R&D team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Nguyen Quoc Duy',
                    title: 'Truong phong',
                    department: 'PMO'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'R&D team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                }
              ]
            },
            {
              expanded: true,
              label: 'HAS HCM',
              children: [
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Pham Viet Anh',
                    title: 'Truong BP',
                    department: 'Presales'
                  }
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Tran Xuan Quynh',
                    title: 'Truong phong',
                    department: 'Sales'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'Sales team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Tran Nam Tien',
                    title: 'Truong phong',
                    department: 'R&D'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'R&D team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Nguyen Quoc Duy',
                    title: 'Truong phong',
                    department: 'PMO'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'R&D team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: 'assets/img/avatars/simson.jpg',
                    name: 'Nguyen Quoc Duy',
                    title: 'Truong phong',
                    department: 'PMO'
                  },
                  children: [
                    {
                      type: 'team',
                      data: {
                        department: 'R&D team',
                        team: [
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Nguyen Viet An',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Chu Thi Ngoc',
                            title: 'Sale',
                          },
                          {
                            image: 'assets/img/avatars/simson.jpg',
                            name: 'Pham Thi My Linh',
                            title: 'Administrator',
                          }
                        ],
                      }
                    },

                  ]
                }
              ]
            },
          ]
        }
      ]
    },
  ];
}
